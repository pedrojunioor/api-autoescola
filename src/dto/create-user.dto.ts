import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  id: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
  role: string;
  cpf: string;
  createdAt: Date;
  updateAt: Date;
}
