import { Component, inject, input, output } from '@angular/core';
import { type ITask } from '../../models/task.model';
import { CardComponent } from '../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-task-item',
  imports: [CardComponent, DatePipe],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  private taskService = inject(TasksService);
  onTaskComplete() {
    this.taskService.deleteTask(this.userTask().id);
  }
  userTask = input.required<ITask>();
}
