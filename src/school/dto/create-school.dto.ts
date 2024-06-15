import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateSchoolDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    school_name: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    address?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    phone?: string;

}
