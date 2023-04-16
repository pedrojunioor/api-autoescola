import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Delete,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import { AuthGuard } from 'src/modules/auth.guard';
import { UserService } from 'src/services/users.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getUsers() {
    return await this.userService.getUsers();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async getUserById(@Param() params) {
    const { id } = params;
    return await this.userService.getUserById(id);
  }

  @Post()
  async createUser(@Body() body: CreateUserDto) {
    return await this.userService.createUser(body);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateQuestionDto: UpdateUserDto) {
    return this.userService.update(id, updateQuestionDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
