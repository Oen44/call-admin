import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private Auth: AuthService, public User: UserService) { }

  ngOnInit() {
    if (!this.User.isLoggedIn) {
      this.Auth.loginWithSession().subscribe(data => {
        if (data.success) {
          this.User.loginUser(data.user_id, data.username, data.email);
        }
      });
    }
  }

}
