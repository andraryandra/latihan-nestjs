import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import moment from 'moment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Menerapkan middleware untuk menyesuaikan zona waktu
  app.use((req, res, next) => {
    // Menyesuaikan zona waktu untuk createdAt jika ada dalam body request
    if (req.body && req.body.createdAt) {
      req.body.createdAt = moment().tz('Asia/Jakarta').toDate();
    }
    next();
  });

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Latihan Nest JS')
    .setDescription('Latihan membuat API menggunakan Nest JS')
    .addBearerAuth(
      {
        description: 'Masukkan token JWT',
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'header',
      },
      'accessToken',
    )
    .setVersion('1.0')
    .addTag('Latihan')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(3000);
}
bootstrap();
