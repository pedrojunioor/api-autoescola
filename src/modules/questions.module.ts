import { Module } from '@nestjs/common';
import { QuestionsService } from '../services/questions.service';
import { QuestionsController } from '../controllers/questions.controller';

@Module({
  controllers: [QuestionsController],
  providers: [QuestionsService]
})
export class QuestionsModule {}
