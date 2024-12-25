import { Injectable } from '@angular/core';
import { TASKS } from '../data/dummy-tasks';
import { ITask } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: ITask[] = TASKS;

  getTasksForUser(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(task: ITask) {
    this.tasks.push(task);
    this.saveTasks();
  }

  getTask(taskId: string) {
    return this.tasks.find((task) => task.id === taskId);
  }
  updateTask(task: ITask) {
    const taskIndex = this.tasks.findIndex((t) => t.id === task.id);
    this.tasks[taskIndex] = task;
    this.saveTasks();
  }
  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
