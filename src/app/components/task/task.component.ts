import { Component, computed, input } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TASKS } from '../../data/dummy-tasks';


@Component({
  selector: 'app-task',
  imports: [TaskItemComponent],
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
onTaskSelected($event: Event) {
throw new Error('Method not implemented.');
}
  addTask() {
    throw new Error('Method not implemented.');
  }
  tasks=TASKS
  username = input.required<string | undefined>();
  userId=input.required<string | undefined>();
  userTasks=computed(()=>this.tasks.filter(task=>task.userId===this.userId()));
}
