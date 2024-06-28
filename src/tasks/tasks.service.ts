import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];
    
    createTask(titulo:string, descricao: string): Task {
        const newTask = new Task(titulo,descricao); // instanciei
        this.tasks.push(newTask); // gambiarra pois não estou usando Banco de dados
        return newTask
    }

    getAllTasks(): Task[]{
        return this.tasks;
    }

    getTaskById(id: string): Task {
        return this.tasks.find((task) => task.id === id)
    }
}