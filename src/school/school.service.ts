import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SchoolService {
  constructor(private prisma: PrismaService) {}

  async create(createSchoolDto: CreateSchoolDto) {
    const createSchool = await this.prisma.schools.create({
      data: createSchoolDto,
    });

    if (createSchool) {
      return {
        statusCode: HttpStatus.OK,
        message: 'School has been created',
        data: createSchool,
      };
    }

  }

  async findAll() {
    const dataSchool = await this.prisma.schools.findMany();

    return {
      statusCode: HttpStatus.OK,
      data: dataSchool,
    };
  }

  async findOne(id: number) {
    const dataSchool = await this.prisma.schools.findFirst({
      where: {
        id: id,
      },
    });

    if (!dataSchool) {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        error: 'School ID not found',
      };
    }

    return {
      statusCode: HttpStatus.OK,
      data: dataSchool,
    };
  }

  async update(id: number, updateSchoolDto: UpdateSchoolDto) {
    const updateSchool = await this.prisma.schools.update({
      where: {
        id: id,
      },
      data: updateSchoolDto,
    });

    if (updateSchool) {
      return {
        statusCode: HttpStatus.OK,
        message: 'School has been updated',
        data: updateSchool,
      };
    }
  }

  async remove(id: number) {
    const deleteSchool = await this.prisma.schools.delete({
      where: {
        id: id,
      },
    });

    if (deleteSchool) {
      return {
        statusCode: HttpStatus.OK,
        message: 'School has been deleted',
        data: deleteSchool,
      };
    }
  }
}
