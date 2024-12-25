import { Component, input } from '@angular/core';
import { ITask } from '../../models/task';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  userTask= input.required<ITask>();
}
