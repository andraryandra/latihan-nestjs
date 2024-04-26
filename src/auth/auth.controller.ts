import { Body, Controller, Get, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

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

    @UseGuards(AuthGuard)
    // @UseInterceptors(FileInterceptor('avatar'))
    @UseInterceptors(
        FileInterceptor('avatar', {
            storage: diskStorage({
                destination: 'public/uploads/image',
                filename: (req, file, cb) => {
                    const randomName = Math.random().toString(36).substring(7);
                    const originalName = file.originalname;
                    const extension = originalName.substring(originalName.lastIndexOf('.'));
                    const fileName = randomName + extension;
                    cb(null, fileName);
                    // cb(null, file.originalname);
                },
            }),
        }),
    )
    @Post('/avatar')
    async avatar(@Req() req, @UploadedFile() file: Express.Multer.File) {
        const userId = req.user.id;
        const nameFolder = '/uploads/image/' + file.filename;
        const uploadAvatar = await this.authService.uploadAvatar(userId, nameFolder);

        return uploadAvatar;
    }
}
