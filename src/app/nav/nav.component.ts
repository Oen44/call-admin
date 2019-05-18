import { Component, ViewEncapsulation } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent {

  constructor(public User: UserService, private Auth: AuthService) { }

  logout() {
    if (this.User.isLoggedIn) {
      this.Auth.logout();
      this.User.logoutUser();
    }
  }

}
