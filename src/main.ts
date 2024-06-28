import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // criando uma instancia do nest com base no módulo raiz
  await app.listen(3000);
}
bootstrap();
