import { Body, Controller, Post, Get, Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ResponseFormatter } from 'src/config/response_formatter';

@ApiTags('Task')
@Controller('task')
@ApiBearerAuth('accessToken')
export class TaskController {

    constructor(private taskService: TaskService) {}

    
    // Catatan: Jika Anda ingin membuat data, maka diperlukan @Body decorator
    // Catatan: @Body decorator akan mengambil data dari body request
    // Catatan: @Post decorator digunakan untuk membuat data
    // Contoh: http://localhost:3000/task
    // @UsePipes(ValidationPipe)
    @UseGuards(AuthGuard)
    @Post()
    async createTask(@Body() body: CreateTaskDto){
        const data = await this.taskService.createTask(body);

        return new ResponseFormatter(data, 'Data has been created');
    }
    
    // Catatan: Jika Anda ingin mendapatkan semua data, maka tidak perlu @Param decorator
    // Catatan: @Get decorator digunakan untuk mengambil data
    // Contoh: http://localhost:3000/task
    @UseGuards(AuthGuard)
    @Get()
    async getAllTask(){
        const data = await this.taskService.getAllTask();

        return new ResponseFormatter(data, 'Data has been fetched');
    }

    // Catatan: Jika Anda ingin mencari sebuah ID, maka diperlukan sebuah @Param decorator
    // Catatan: @Param decorator akan mengambil parameter dari URL
    // Contoh: http://localhost:3000/task/1
    @UseGuards(AuthGuard)
    @Get('/:task_id')
    async getTaskById(@Param('task_id') task_id: number){
        const data = await this.taskService.getTaskById(+task_id);

        return new ResponseFormatter(data, 'Data has been fetched');
    }

    // Catatan: Jika Anda ingin mengupdate data, maka diperlukan @Body dan @Param decorator
    // Catatan: @Body decorator akan mengambil data dari body request
    // Catatan: @Param decorator akan mengambil parameter dari URL
    // Catatan: @Patch decorator digunakan untuk mengupdate data
    // Contoh: http://localhost:3000/task/1
    @UseGuards(AuthGuard)
    @Patch('/:task_id')
    async updateTaskById(@Param('task_id') task_id: number, @Body() body: UpdateTaskDto){
        const data = await this.taskService.updateTaskById(+task_id, body);

        return new ResponseFormatter(data, 'Data has been updated');
    }

    // Catatan: Jika Anda ingin menghapus data, maka diperlukan @Param decorator
    // Catatan: @Param decorator akan mengambil parameter dari URL
    // Catatan: @Delete decorator digunakan untuk menghapus data
    // Contoh: http://localhost:3000/task/1
    @UseGuards(AuthGuard)
    @Delete('/:task_id')
    async deleteTaskById(@Param('task_id') task_id: number) {
        const data = await this.taskService.deleteTaskById(+task_id);

        return new ResponseFormatter(data, 'Data has been deleted');
    }
}
