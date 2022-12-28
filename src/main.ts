import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
  await app.listen(8080);
}
bootstrap();
