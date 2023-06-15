import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../domain/user.entity';
import { CreateUserDto, TokenResponse } from './dto/create-user.dto';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) // User 엔티티를 주입받을 수 있도록 설정
    private userRepository: Repository<User>, // UserRepository를 주입
  ) {}
  async findById(idx: number): Promise<User> {
    return this.userRepository.findOne({ where: { idx } });
  }
  async findByEmailAndPassword(email: string, password:string): Promise<User> {
    return this.userRepository.findOne({where: {email,password}});
  }

  async findByKakaoUserId(kakaoUserId: string): Promise<User> {
    return this.userRepository.findOne({ where: { kakaoUserId } });
  }

  // 사용자 생성 메서드
  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }
  async kakaoSignUp(kakaoSignUpDto: CreateUserDto): Promise<User> {
    // KakaoSignUpDto에서 필요한 필드를 추출하여 CreateUserDto 객체를 생성
    const createUserDto: CreateUserDto = {
      email: '', // 카카오 회원가입에는 필요하지 않은 필드
      nick: '', // 카카오 회원가입에는 필요하지 않은 필드
      password: '', // 카카오 회원가입에는 필요하지 않은 필드
      profile: '', // 카카오 회원가입에는 필요하지 않은 필드

      // 카카오 회원가입에서 필요한 필드
      kakaoUserId: kakaoSignUpDto.kakaoUserId,
      nickname: kakaoSignUpDto.nickname,
      profileImage: kakaoSignUpDto.profileImage,
      // 다른 필요한 필드가 있다면 여기에 추가
    };
    // 새로운 사용자를 생성
    return await this.userRepository.save(createUserDto);
  }
}

@Injectable()
export class KakaoAuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async getKakaoToken(authorizationCode: string): Promise<TokenResponse> {
    const clientId = this.configService.get<string>(
      'kakao.clientId', // configService에서 clientId 값을 가져올 키를 수정
    );

    const redirectUri = this.configService.get<string>(
      'kakao.redirectUri', // configService에서 redirectUri 값을 가져올 키를 수정
    );
    const clientSecret = this.configService.get<string>(
      'kakao.clientSecret', // configService에서 clientSecret 값을 가져올 키를 수정
    );

    const tokenUrl = 'https://kauth.kakao.com/oauth/token';
    const tokenRequestConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    const tokenPayload = new URLSearchParams();
    tokenPayload.append('grant_type', 'authorization_code');
    tokenPayload.append('client_id', clientId);
    tokenPayload.append('client_secret', clientSecret);
    tokenPayload.append('redirect_uri', redirectUri);
    tokenPayload.append('code', authorizationCode);

    const tokenResponse: AxiosResponse<TokenResponse> = await this.httpService
      .post(tokenUrl, tokenPayload.toString(), tokenRequestConfig)
      .toPromise();

    if (tokenResponse.status === 200) {
      return tokenResponse.data;
    } else {
      throw new Error('Failed to get Kakao token');
    }
  }
}
