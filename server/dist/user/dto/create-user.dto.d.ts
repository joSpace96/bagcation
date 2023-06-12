export declare class CreateUserDto {
    email: string;
    nick: string;
    password: string;
    profile: string;
    kakaoUserId: string;
    nickname: string;
    profileImage: string;
}
export interface TokenResponse {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    token_type: string;
}
export interface JwtPayload {
    userId: number;
}
