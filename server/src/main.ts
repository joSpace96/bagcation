import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const logger = new Logger();
  app.useLogger(logger);

  const config = new DocumentBuilder()
    .setTitle('Bagcation')
    .setDescription('Bagcation APIs')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);

  app.enableCors(); // CORS 활성화
  app.useStaticAssets('upload/images', {
    prefix: '/upload/images',
  });
  await app.listen(4000);
}
bootstrap();
