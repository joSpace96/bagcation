import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  nick: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  profile: string;

  // 카카오 회원가입에 필요한 필드를 추가
  @ApiProperty()
  kakaoUserId: string;

  @ApiProperty()
  nickname: string;

  @ApiProperty()
  profileImage: string;

  // 다른 필요한 필드가 있다면 여기에 추가
}
export interface TokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
  // 추가 필드가 있다면 여기에 정의
}
