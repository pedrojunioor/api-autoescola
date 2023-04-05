import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestionDto } from './create-question.dto';
import { UUID } from 'node:crypto';
import { IsNotEmpty } from 'class-validator';

export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {
  @IsNotEmpty()
  id: UUID
  Pergunta: string
  Resposta: string
  Tema: string
  A: string
  B: string
  C: string
  D: string
  createdAt: Date
  updateAt: Date
}
