import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signUp(createUserDto: CreateUserDto): Promise<{
        message: string;
        user: CreateUserDto & import("../domain/user.entity").User;
    }>;
    findByKakaoId(kakaoUserId: string): Promise<boolean>;
}
export declare class LoginController {
    private readonly userService;
    private readonly configService;
    constructor(userService: UserService, configService: ConfigService);
    exchangeKakaoCode(code: string, res: Response): Promise<void>;
    refreshKakaoToken(refreshToken: string): Promise<{
        accessToken: any;
    }>;
}
