import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 3000;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1')
  await app.listen(PORT);
  console.log(`Server started on port ${PORT}`)
}
bootstrap();
