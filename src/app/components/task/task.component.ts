import { Component, computed, input, output } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TASKS } from '../../data/dummy-tasks';
import { ITask } from '../../models/task.model';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task',
  imports: [TaskItemComponent, AddTaskComponent],
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  onAddNewTask() {
    this.isAddingTask = true;
  }
  constructor(private taskService: TasksService) {}
  onSubmitNewTask($event: boolean) {
    this.isAddingTask = !$event;
  }

  username = input.required<string | undefined>();
  userId = input.required<string>();
  isAddingTask = false;

  // userTasks = computed<ITask[]>(() =>
  //   this.tasks.filter((task) => task.userId === this.userId())
  // );
  get userTasksProp() {
    return this.taskService.getTasksForUser(this.userId());
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
