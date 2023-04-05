import { IsNotEmpty } from 'class-validator';
export class CreateQuestionDto {
  @IsNotEmpty()
  Pergunta  :string
  @IsNotEmpty()
  Resposta  :string
  @IsNotEmpty()
  Tema      :string
  @IsNotEmpty()
  A         :string
  @IsNotEmpty()
  B         :string
  @IsNotEmpty()
  C         :string
  @IsNotEmpty()
  D         :string
  createdAt:  Date
  updateAt:  Date
}
