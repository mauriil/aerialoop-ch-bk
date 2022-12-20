import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Aerialoop API')
    .setDescription('Aerialoop challenge API documentation')
    .setVersion('1.0')
    .addTag('Health')
    .addTag('Flights')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(process.env.APP_PORT);
  console.log(
    `Server running on port ${process.env.APP_PORT}`,
    `| ENV ${process.env.ENVIRONMENT}`,
  );
}
bootstrap();
