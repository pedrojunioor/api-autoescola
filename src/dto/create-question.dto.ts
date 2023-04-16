import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateQuestionDto {
  @ApiProperty()
  @IsNotEmpty()
  Pergunta  :string
  @IsNotEmpty()
  Resposta  :string
  @IsNotEmpty()
  Tema      :string
  @IsNotEmpty()
  A         :string
  @ApiProperty({
    type: Number,
  })
  // @IsNotEmpty()
  B         :string
  @IsNotEmpty()
  C         :string
  @IsNotEmpty()
  D         :string
  @ApiProperty({
    type: Date,
  })
  createdAt:  Date
  updateAt:  Date
}
