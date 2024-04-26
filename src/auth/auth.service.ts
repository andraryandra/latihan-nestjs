import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { compare, hash } from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { jwt_config } from 'src/config/config_jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  /**
   * Register
   * @param data
   * @returns
   */
  async register(data: RegisterDto) {
    const checkUser = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });

    if (checkUser) {
      throw new HttpException('User already exists', HttpStatus.FOUND);
    }

    data.password = await hash(data.password, 12);
    const createUser = await this.prisma.users.create({
      data,
    });

    if (createUser) {
      return {
        statusCode: HttpStatus.OK,
        message: 'User has been created',
        data: createUser,
      };
    }
  }

  /**
   * Login User
   * @param data
   * @returns
   */
  async login(data: LoginDto) {
    const checkUser = await this.prisma.users.findFirst({
      where: {
        email: data.email,
      },
    });

    if (!checkUser) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const checkPassword = await compare(data.password, checkUser.password);

    if (checkPassword) {
      const accessToken = this.generateJWT({
        sub: checkUser.id,
        email: checkUser.email,
        name: checkUser.name,
      });
      return {
        statusCode: HttpStatus.OK,
        message: 'Login success',
        data: checkUser,
        accessToken: accessToken,
      };
    } else {
      throw new HttpException('Password not match', HttpStatus.UNAUTHORIZED);
    }
  }

  async profile(user_id: number) {
    const user = await this.prisma.users.findUnique({
        where: {
            id: user_id
        },
        select: {
            id: true,
            name: true,
            email: true
        }
    });

    if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return {
        statusCode: HttpStatus.OK,
        message: 'Profile',
        data: user
    }
}

  generateJWT(payload: any) {
    return this.jwtService.sign(payload, {
      secret: jwt_config.secret,
      expiresIn: jwt_config.expired,
    });
  }
}
