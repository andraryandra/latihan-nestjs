import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // /auth/register
  @Post('/register')
  async register(@Body() data: RegisterDto) {
    return await this.authService.register(data);
  }

  // /auth/login
  @Post('/login')
  async login(@Body() data: LoginDto) {
    return await this.authService.login(data);
  }

  @UseGuards(AuthGuard)
  @Get('/profile')
  async profile(@Req() req) {
    const userId = req.user.id;
    const profile = await this.authService.profile(userId);

    return profile;
}
}
