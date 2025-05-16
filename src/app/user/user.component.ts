import { Component,signal, computed} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const ramdomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[ramdomIndex]);
  imagePath  = computed(() => 'assets/users/' + this.selectedUser().avatar)

  onSelectUser() {
    const ramdomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser.set(DUMMY_USERS[ramdomIndex])
  }

}
