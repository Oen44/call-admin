import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  private _username: string = '';
  private _password: string = '';
  private _repassword: string = '';
  private _email: string = '';

  constructor(private Auth: AuthService, public User: UserService) { }

  @Input()
  set username(username: string) {
    this._username = (username && username.trim()) || '';
  }

  get username(): string { return this._username; }

  @Input()
  set password(password: string) {
    this._password = (password && password.trim()) || '';
  }

  get password(): string { return this._password; }

  @Input()
  set repassword(repassword: string) {
    this._repassword = (repassword && repassword.trim()) || '';
  }

  get repassword(): string { return this._repassword; }

  @Input()
  set email(email: string) {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;
    this._email = (email && email.trim()) || '';
  }

  get email(): string { return this._email; }

  onSubmit() {
    this.Auth.registerUser(this.username, this.password, this.email);
  }

}
