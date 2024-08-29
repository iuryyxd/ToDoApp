export interface ITask {
    id: string;
    taskName: string;
    isCompleted: boolean;
}

export interface ITaskContext {
    tasks: ITask[],
    isLoading: boolean,
    createTask: (taskName: string) => void,
    deleteTask: (id: string) => void,
    updateTask: (task: ITask) => void,
}