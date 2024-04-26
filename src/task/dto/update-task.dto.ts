import { IsOptional, IsString } from "class-validator";

export class UpdateTaskDto {

    @IsOptional() //IsOption berfungsi sebagai nullable(), dapat diisi atau tidak
    @IsString() //IsString berfungsi sebagai tipe data string
    task_name: string;

    @IsOptional() //IsOption berfungsi sebagai nullable(), dapat diisi atau tidak
    @IsString() //IsString berfungsi sebagai tipe data string
    task_description: string;
}