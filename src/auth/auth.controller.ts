import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ProfileDto } from './dto/profil.dto';
import { ResponseFormatter } from 'src/config/response_formatter';

@ApiTags('Auth')
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

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Profile data',
    type: ProfileDto,
  })
  @ApiBearerAuth('accessToken')
  @UseGuards(AuthGuard)
  @Get('/profile')
  async profile(@Req() req) {
    const userId = req.user.id;
    const profile = await this.authService.profile(userId);

    return new ResponseFormatter(profile, 'Profile data');
  }

  @ApiBearerAuth('accessToken')
  @UseGuards(AuthGuard)
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        avatar: {
          type: 'string',
          format: 'binary',
          description: 'Upload avatar JPEG, JPG, PNG',
        },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: diskStorage({
        destination: 'public/uploads/image',
        filename: (req, file, cb) => {
          const randomName = Math.random().toString(36).substring(7);
          const originalName = file.originalname;
          const extension = originalName.substring(
            originalName.lastIndexOf('.'),
          );
          const fileName = randomName + extension;
          cb(null, fileName);
          // cb(null, file.originalname);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (
          file.mimetype === 'image/jpeg' ||
          file.mimetype === 'image/png' ||
          file.mimetype === 'image/jpg'
        ) {
          cb(null, true);
        } else {
          cb(new BadRequestException('File type not supported, File Only Support JPG, JPEG, PNG'), false);
        }
      },
      limits: {
        fileSize: 1024 * 1024 * 2, // 2MB
      },
    }),
  )
  @Post('/avatar')
  async avatar(@Req() req, @UploadedFile() file: Express.Multer.File) {
    const userId = req.user.id;
    const nameFolder = '/uploads/image/' + file.filename;
    const uploadAvatar = await this.authService.uploadAvatar(
      userId,
      nameFolder,
    );

    return new ResponseFormatter(uploadAvatar, 'Avatar updated');
  }
}
