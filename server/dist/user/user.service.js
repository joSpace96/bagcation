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
exports.KakaoAuthService = exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../domain/user.entity");
const axios_1 = require("@nestjs/axios");
const config_1 = require("@nestjs/config");
let UserService = exports.UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async findById(idx) {
        return this.userRepository.findOne({ where: { idx } });
    }
    async findByEmailAndPassword(email, password) {
        return this.userRepository.findOne({ where: { email, password } });
    }
    async findByKakaoUserId(kakaoUserId) {
        return this.userRepository.findOne({ where: { kakaoUserId } });
    }
    async create(createUserDto) {
        return await this.userRepository.save(createUserDto);
    }
    async kakaoSignUp(kakaoSignUpDto) {
        const createUserDto = {
            email: '',
            nick: '',
            password: '',
            profile: '',
            kakaoUserId: kakaoSignUpDto.kakaoUserId,
            nickname: kakaoSignUpDto.nickname,
            profileImage: kakaoSignUpDto.profileImage,
        };
        return await this.userRepository.save(createUserDto);
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
let KakaoAuthService = exports.KakaoAuthService = class KakaoAuthService {
    constructor(configService, httpService) {
        this.configService = configService;
        this.httpService = httpService;
    }
    async getKakaoToken(authorizationCode) {
        const clientId = this.configService.get('kakao.clientId');
        const redirectUri = this.configService.get('kakao.redirectUri');
        const clientSecret = this.configService.get('kakao.clientSecret');
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
        const tokenResponse = await this.httpService
            .post(tokenUrl, tokenPayload.toString(), tokenRequestConfig)
            .toPromise();
        if (tokenResponse.status === 200) {
            return tokenResponse.data;
        }
        else {
            throw new Error('Failed to get Kakao token');
        }
    }
};
exports.KakaoAuthService = KakaoAuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        axios_1.HttpService])
], KakaoAuthService);
//# sourceMappingURL=user.service.js.map