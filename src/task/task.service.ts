import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
// import { validate } from 'class-validator';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async createTask(data: CreateTaskDto) {
    const createData = await this.prisma.tasks.create({
      data: data,
    });

    return {
      statusCode: 200,
      message: 'Data has been created',
      data: createData,
    };
  }

  async getAllTask() {
    const dataTask = await this.prisma.tasks.findMany();
    return {
      statusCode: 200,
      data: dataTask,
    };
  }

  async getTaskById(task_id: number) {
    const dataTask = await this.prisma.tasks.findFirst({
      where: {
        id: task_id,
      },
    });

    if (!dataTask) {
      return {
        statusCode: 404,
        error: 'Data ID not found',
      };
    }

    return {
      statusCode: 200,
      data: dataTask,
    };
  }

  async updateTaskById(task_id: number, data: UpdateTaskDto) {
    const updateData = await this.prisma.tasks.update({
      where: {
        id: task_id,
      },
      data: data,
    });

    return {
      statusCode: 200,
      data: updateData,
    };
  }

  async deleteTaskById(task_id: number) {
    const deleteData = await this.prisma.tasks.delete({
      where: {
        id: task_id,
      },
    });

    return {
      statusCode: 200,
      message: 'Data has been deleted',
      data: deleteData,
    };
  }
}
