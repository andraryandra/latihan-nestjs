import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('School')
@UseGuards(AuthGuard)
@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post()
  async create(@Body() createSchoolDto: CreateSchoolDto) {
    return await this.schoolService.create(createSchoolDto);
  }

  @Get()
  async findAll() {
    return await this.schoolService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.schoolService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSchoolDto: UpdateSchoolDto) {
    return await this.schoolService.update(+id, updateSchoolDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.schoolService.remove(+id);
  }
}
