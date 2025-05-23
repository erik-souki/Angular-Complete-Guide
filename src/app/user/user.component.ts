import { Component, computed, EventEmitter, Input, input, output, Output} from '@angular/core';

// type User = {
//     id: string;
//     name: string;
//     avatar: string;
//   };

interface User {
    id: string;
    name: string;
    avatar: string;
  };
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
