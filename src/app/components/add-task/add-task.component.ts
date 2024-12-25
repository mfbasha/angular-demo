import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ITask } from '../../models/task.model';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  private taskService = inject(TasksService);
  onCancelAddTask() {
    this.close.emit();
  }
  userId = input.required<string>();
  userName = input.required<string | undefined>();
  close = output();
  title = signal<string>('');
  summary = signal<string>('');
  dueDate = signal<string>('');
  newTaskAdded = output<boolean>();
  onAddTask() {
    this.taskService.addTask({
      id: Math.random().toString(36).substring(2),
      userId: this.userId(),
      title: this.title(),
      summary: this.summary(),
      dueDate: new Date(this.dueDate()),
    });
    this.close.emit();
  }
}
