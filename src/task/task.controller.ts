import { Body, Controller, Post, Get, Param, Patch, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task')
export class TaskController {

    constructor(private taskService: TaskService) {}

    
    // Catatan: Jika Anda ingin membuat data, maka diperlukan @Body decorator
    // Catatan: @Body decorator akan mengambil data dari body request
    // Catatan: @Post decorator digunakan untuk membuat data
    // Contoh: http://localhost:3000/task
    // @UsePipes(ValidationPipe)
    @Post()
    async createTask(@Body() body: CreateTaskDto){
        return await this.taskService.createTask(body);
    }
    
    // Catatan: Jika Anda ingin mendapatkan semua data, maka tidak perlu @Param decorator
    // Catatan: @Get decorator digunakan untuk mengambil data
    // Contoh: http://localhost:3000/task
    @Get()
    async getAllTask(){
        return await this.taskService.getAllTask();
    }

    // Catatan: Jika Anda ingin mencari sebuah ID, maka diperlukan sebuah @Param decorator
    // Catatan: @Param decorator akan mengambil parameter dari URL
    // Contoh: http://localhost:3000/task/1
    @Get('/:task_id')
    async getTaskById(@Param('task_id') task_id: number){
        return await this.taskService.getTaskById(+task_id);
    }

    // Catatan: Jika Anda ingin mengupdate data, maka diperlukan @Body dan @Param decorator
    // Catatan: @Body decorator akan mengambil data dari body request
    // Catatan: @Param decorator akan mengambil parameter dari URL
    // Catatan: @Patch decorator digunakan untuk mengupdate data
    // Contoh: http://localhost:3000/task/1
    @Patch('/:task_id')
    async updateTaskById(@Param('task_id') task_id: number, @Body() body: UpdateTaskDto){
        return await this.taskService.updateTaskById(+task_id, body);
    }

    // Catatan: Jika Anda ingin menghapus data, maka diperlukan @Param decorator
    // Catatan: @Param decorator akan mengambil parameter dari URL
    // Catatan: @Delete decorator digunakan untuk menghapus data
    // Contoh: http://localhost:3000/task/1
    @Delete('/:task_id')
    async deleteTaskById(@Param('task_id') task_id: number) {
        return await this.taskService.deleteTaskById(+task_id);
    }
}
