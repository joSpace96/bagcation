"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const swagger_1 = require("@nestjs/swagger");
const axios_1 = require("axios");
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("@nestjs/config");
let UserController = exports.UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async signUp(createUserDto) {
        const createdUser = await this.userService.create(createUserDto);
        const response = {
            message: '회원가입이 완료되었습니다.',
            user: createdUser,
        };
        return response;
    }
    async findByKakaoId(kakaoUserId) {
        const user = await this.userService.findByKakaoUserId(kakaoUserId);
        if (user) {
            return true;
        }
        else {
            return false;
        }
    }
};
__decorate([
    (0, common_1.Post)('signup'),
    (0, swagger_1.ApiTags)('User'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signUp", null);
__decorate([
    (0, common_1.Get)('find-by-kakao-id'),
    (0, swagger_1.ApiTags)('User'),
    __param(0, (0, common_1.Query)('kakaoUserId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findByKakaoId", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
let LoginController = exports.LoginController = class LoginController {
    constructor(userService, configService) {
        this.userService = userService;
        this.configService = configService;
    }
    async exchangeKakaoCode(code, res) {
        try {
            const params = new URLSearchParams();
            params.append('grant_type', 'authorization_code');
            params.append('client_id', 'c6acf344a39dd6fa0033f505215fd2a3');
            params.append('redirect_uri', 'http://localhost:3000/kakao-callback');
            params.append('code', code);
            params.append('client_secret', '0BpAH3VnLFgTiyt9zmUuz5b2j3jfyCDN');
            const { data } = await axios_1.default.post('https://kauth.kakao.com/oauth/token', params.toString(), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            const accessToken = data.access_token;
            const refreshToken = data.refresh_token;
            const response = await axios_1.default.get('https://kapi.kakao.com/v2/user/me', {
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
            let user = await this.userService.findByKakaoUserId(kakaoUserId);
            if (!user) {
                const createUserDto = {
                    email: '',
                    nick: '',
                    password: '',
                    profile: '',
                    kakaoUserId: kakaoUserId,
                    nickname: nickname,
                    profileImage: profileImage,
                };
                user = await this.userService.create(createUserDto);
            }
            const expiresInMinutes = 60;
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
            const localToken = (0, jsonwebtoken_1.sign)({ kakaoUserId }, '0BpAH3VnLFgTiyt9zmUuz5b2j3jfyCDN', { expiresIn: '1h' });
            res.json({ user, localToken, accessToken, refreshToken, expiresAt });
        }
        catch (error) {
            console.error(error);
            throw new Error('카카오 코드를 액세스 토큰으로 교환하는데 실패했습니다.');
        }
    }
    async refreshKakaoToken(refreshToken) {
        try {
            const params = new URLSearchParams();
            params.append('grant_type', 'refresh_token');
            params.append('client_id', 'c6acf344a39dd6fa0033f505215fd2a3');
            params.append('refresh_token', refreshToken);
            params.append('client_secret', '0BpAH3VnLFgTiyt9zmUuz5b2j3jfyCDN');
            const { data } = await axios_1.default.post('https://kauth.kakao.com/oauth/token', params.toString(), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            const accessToken = data.access_token;
            return { accessToken };
        }
        catch (error) {
            console.error(error);
            throw new Error('카카오 리프레시 토큰으로 액세스 토큰을 갱신하는데 실패했습니다.');
        }
    }
};
__decorate([
    (0, common_1.Get)('kakao/token'),
    (0, swagger_1.ApiTags)('User'),
    __param(0, (0, common_1.Query)('code')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "exchangeKakaoCode", null);
__decorate([
    (0, common_1.Post)('kakao/token/refresh'),
    (0, swagger_1.ApiTags)('User'),
    __param(0, (0, common_1.Body)('refreshToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "refreshKakaoToken", null);
exports.LoginController = LoginController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        config_1.ConfigService])
], LoginController);
//# sourceMappingURL=user.controller.js.map