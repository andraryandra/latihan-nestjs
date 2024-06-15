import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTaskDto {

    @IsOptional()
    id_user: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    task_name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    task_description: string;
    
}
