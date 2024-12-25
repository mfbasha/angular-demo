import { Component, signal,computed, Input,input, EventEmitter, Output,output } from '@angular/core';
import { DUMMY_USERS } from '../../data/dummy-users';
import { single } from 'rxjs';
import { IUser } from '../../models/user';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({
  //   required: true,
  // }) avatar!: string;
  // @Input({
  //   required: true,
  // }) name!: string;
  // @Input({
  //   required: true,
  // }) id!: string;
  // id = input.required<string>();
  // avatar=input.required<string>();
  // name=input.required();
  user =input.required<IUser>();
  select=output<string>();
  // @Output()select = new  EventEmitter<string>();
  // selectedAvatar = signal(this.avatar);
  // selectedName = signal(this.name);
  // selectedImage = computed(() => 'assets/users/' + this.selectedAvatar());
  imagePath = computed<string>(() => 'assets/users/' + this.user().avatar);
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath ='assets/users/' + this.avatar;
  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  onUserSelected() {
    this.select.emit(this.user().id);
  }
}
