import { ApiProperty } from '@nestjs/swagger';

// Definisikan interface untuk Task
export class Task {
  @ApiProperty()
  id: number;

  @ApiProperty()
  id_user: number;
  
  @ApiProperty()
  task_name: string;
  
  @ApiProperty()
  task_description: string;

  @ApiProperty()
  created_at: Date;
}

// Gunakan decorator ApiPropertyOptional untuk mendokumentasikan tipe Task sebagai array
export class ProfileDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  avatar?: string;

  @ApiProperty({ type: [Task] })
  tasks?: Task[];

  constructor(
    id: number,
    name: string,
    email: string,
    tasks?: Task[],
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.tasks = tasks;
  }
}