import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') ?? 8080;
  app.enableCors();
  app.use(helmet());
  app.enableCors({
    origin: '*',
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'x-recaptcha-authorization',
    ],
    methods: ['GET', 'DELETE', 'PUT', 'POST'],
  });
  await app.listen(port);
}
bootstrap();
