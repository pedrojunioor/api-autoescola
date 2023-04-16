import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthLoginDto } from 'src/dto/auth-login.dto';
import { AuthService } from 'src/services/auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  async signIn(@Body() body: AuthLoginDto) {
    const { email, password } = body;
    return await this.authService.signIn(email, password);
  }
}
