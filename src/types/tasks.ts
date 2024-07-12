export enum TaskStatus {
    ToDo = 'To Do',
    Done = 'Done',
}

export type Task = {
    status: TaskStatus,
    description: string
}

