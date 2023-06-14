import { Controller, Post, Body, Get, Query, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import axios from 'axios';
import { Response } from 'express';
import { sign } from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 회원가입 API 엔드포인트
  @Post('signup')
  @ApiTags('User') // 'User' 태그를 추가합니다.
  async signUp(@Body() createUserDto: CreateUserDto) {
    // 클라이언트에서 전달된 회원가입 정보가 userData에 담깁니다.

    // UserService를 사용하여 회원가입 로직을 처리합니다.
    const createdUser = await this.userService.create(createUserDto);

    // 회원가입이 완료된 후, 반환할 응답 데이터를 구성합니다.
    const response = {
      message: '회원가입이 완료되었습니다.',
      user: createdUser,
    };

    // 응답 데이터를 클라이언트에 전송합니다.
    return response;
  }

  // kakao Id로 회원정보 조회
  @Get('find-by-kakao-id')
  @ApiTags('User')
  async findByKakaoId(@Query('kakaoUserId') kakaoUserId: string) {
    const user = await this.userService.findByKakaoUserId(kakaoUserId);

    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
// KakaoAuthController
@Controller('auth')
export class LoginController {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  @Get('kakao/token')
  @ApiTags('User')
  async exchangeKakaoCode(@Query('code') code: string, @Res() res: Response) {
    try {
      // 액세스 토큰 요청
      const params = new URLSearchParams();
      params.append('grant_type', 'authorization_code');
      params.append('client_id', 'c6acf344a39dd6fa0033f505215fd2a3'); // 여기에 카카오 앱의 클라이언트 ID를 입력
      params.append('redirect_uri', 'http://localhost:3000/kakao-callback'); // 여기에 리다이렉트 URI를 입력
      params.append('code', code);
      params.append('client_secret', '0BpAH3VnLFgTiyt9zmUuz5b2j3jfyCDN');
      // params.append('scope', 'profile,account_email'); // 필수 동의 항목을 추가

      const { data } = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        params.toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
      const accessToken = data.access_token;
      const refreshToken = data.refresh_token;

      // 액세스 토큰을 사용하여 사용자 정보 요청
      const response = await axios.get('https://kapi.kakao.com/v2/user/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const kakaoUserId = response.data.id;
      const nickname = response.data.properties.nickname;
      const profileImage = response.data.properties.profile_image;
      console.log('카카오 사용자 ID:', kakaoUserId);
      console.log('닉네임:', nickname);
      console.log('프로필 사진:', profileImage);

      // 새로운 사용자인지 확인
      let user = await this.userService.findByKakaoUserId(kakaoUserId);

      if (!user) {
        // 사용자가 존재하지 않을 경우, 새로운 사용자 생성
        const createUserDto: CreateUserDto = {
          email: '', // 웹 회원가입에 필요한 필드
          nick: '', // 웹 회원가입에 필요한 필드
          password: '', // 웹 회원가입에 필요한 필드
          profile: '', // 웹 회원가입에 필요한 필드
          kakaoUserId: kakaoUserId, // 카카오 회원가입에 필요한 필드
          nickname: nickname, // 카카오 회원가입에 필요한 필드
          profileImage: profileImage, // 카카오 회원가입에 필요한 필드
          // 다른 필요한 필드를 여기에 추가
        };

        user = await this.userService.create(createUserDto);
      }
      // 쿠키에 토큰과 만료 시간을 저장
      const expiresInMinutes = 60; // 토큰의 유효기간 설정코드 (분단위)
      const expiresAt = new Date();
      expiresAt.setMinutes(expiresAt.getMinutes() + expiresInMinutes);
      res.cookie('accessToken', accessToken, {
        httpOnly: true,
        expires: expiresAt,
      });
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        expires: expiresAt,
      });

      // 로컬 토큰 생성
      const localToken = sign(
        { kakaoUserId },
        '0BpAH3VnLFgTiyt9zmUuz5b2j3jfyCDN',

        { expiresIn: '1h' },
      );
      // 토큰을 클라이언트에게 전송
      res.cookie('localToken', localToken, {
        httpOnly: true,
        expires: expiresAt,
      });

      res.json({ user, localToken, accessToken, refreshToken });
    } catch (error) {
      console.error(error);
      throw new Error('카카오 코드를 액세스 토큰으로 교환하는데 실패했습니다.');
    }
  }

  @Post('kakao/token/refresh')
  @ApiTags('User')
  async refreshKakaoToken(@Body('refreshToken') refreshToken: string) {
    try {
      // 리프레시 토큰을 사용하여 새로운 액세스 토큰 발급 요청
      const params = new URLSearchParams();
      params.append('grant_type', 'refresh_token');
      params.append('client_id', 'c6acf344a39dd6fa0033f505215fd2a3'); // 여기에 카카오 앱의 클라이언트 ID를 입력
      params.append('refresh_token', refreshToken);
      params.append('client_secret', '0BpAH3VnLFgTiyt9zmUuz5b2j3jfyCDN'); // 여기에 카카오 앱의 클라이언트 시크릿을 입력

      const { data } = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        params.toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );
      const accessToken = data.access_token;

      // 새로 발급된 액세스 토큰을 사용하여 사용자 정보 요청 및 처리 로직

      return { accessToken };
    } catch (error) {
      console.error(error);
      throw new Error(
        '카카오 리프레시 토큰으로 액세스 토큰을 갱신하는데 실패했습니다.',
      );
    }
  }
}
