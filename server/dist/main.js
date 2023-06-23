"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const logger = new common_1.Logger();
    app.useLogger(logger);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Bagcation')
        .setDescription('Bagcation APIs')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/api', app, document);
    app.enableCors();
    app.useStaticAssets('upload/images', {
        prefix: '/upload/images',
    });
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map