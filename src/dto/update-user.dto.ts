import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  name: string;
  email: string;
  password: string;
  role: string;
  cpf: string;
  createdAt: Date;
  updateAt: Date;
}
