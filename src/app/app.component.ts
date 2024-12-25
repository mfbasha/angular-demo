import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './data/dummy-users';
import { TaskComponent } from './components/task/task.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TaskComponent,NgFor,NgIf],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  taskUser!: string;
  title = 'angular-demo';
  userId?: string ;
  users = DUMMY_USERS;
  onUserSelected($id: string) {
    const selectedUser = this.users.find((user) => user.id === $id)?.name;
    this.userId = $id;
    this.taskUser = selectedUser ?? 'No user selected';
  }
}
