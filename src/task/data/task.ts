export interface Task {
    task_id: number;
    task_name: string;
    task_description: string;
}

export const tasks : Task[] = [
    {
        task_id: 1,
        task_name: 'Task 1',
        task_description: 'Description 1'
    },
    {
        task_id: 2,
        task_name: 'Task 2',
        task_description: 'Description 2'
    },
    {
        task_id: 3,
        task_name: 'Task 3',
        task_description: 'Description 3'
    }
]