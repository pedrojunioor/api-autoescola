import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AuthLoginDto {
  @ApiProperty({
    required:true
  })
  @IsNotEmpty()
  email: string;
  @ApiProperty()
  @IsNotEmpty()
  password: string;

}
