import { Repository } from 'typeorm';
import { User } from '../domain/user.entity';
import { CreateUserDto, TokenResponse } from './dto/create-user.dto';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findById(idx: number): Promise<User>;
    findByKakaoUserId(kakaoUserId: string): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & User>;
    kakaoSignUp(kakaoSignUpDto: CreateUserDto): Promise<User>;
}
export declare class KakaoAuthService {
    private readonly configService;
    private readonly httpService;
    constructor(configService: ConfigService, httpService: HttpService);
    getKakaoToken(authorizationCode: string): Promise<TokenResponse>;
}
