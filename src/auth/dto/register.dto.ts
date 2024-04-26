import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength,  } from "class-validator";

export class RegisterDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(16)
    password: string;
}