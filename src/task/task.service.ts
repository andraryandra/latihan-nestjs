import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { REQUEST } from '@nestjs/core';

@Injectable()
export class TaskService {
  constructor(
    private prisma: PrismaService,
    @Inject(REQUEST) private req: any,
  ) {}

  async createTask(data: CreateTaskDto) {

    data.id_user = this.req.user.id;
    const createData = await this.prisma.tasks.create({
      data: data,
    });

   return createData;
  }

  async getAllTask() {

    const dataTask = await this.prisma.tasks.findMany({
      where: {
        id_user: this.req.user.id,
      },
      include: {
        users: {
          select: {
            id: true,
            name: true,
            avatar: true,
            email: true,
          }
        }
      },
    })

    return dataTask;
  }

  async getTaskById(task_id: number) {
    const dataTask = await this.prisma.tasks.findFirst({
      where: {
        id: task_id,
        id_user: this.req.user.id,
      },
    });

    if (!dataTask) {
      return {
        statusCode: 404,
        error: 'Data ID not found',
      };
    }

    return dataTask;
  }

  async updateTaskById(task_id: number, data: UpdateTaskDto) {
    data.id_user = this.req.user.id;
    const updateData = await this.prisma.tasks.update({
      where: {
        id: task_id,
      },
      data: data,
    });

    return updateData;
  }

  async deleteTaskById(task_id: number) {
    const deleteData = await this.prisma.tasks.delete({
      where: {
        id: task_id,
      },
    });

    return deleteData;
  }
}
