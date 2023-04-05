import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { UserService } from './services/users.service';
import { AuthModule } from './modules/auth.module';
import { UserModule } from './modules/user.module';
import { QuestionsModule } from './modules/questions.module';

@Module({
  imports: [AuthModule, UserModule, QuestionsModule],
  controllers: [AppController],
  providers: [PrismaService, UserService],
})
export class AppModule {}
