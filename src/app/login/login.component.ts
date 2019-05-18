import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private _username: string = '';
  private _password: string = '';
  private _rememberMe: boolean = false;

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
  set rememberMe(rememberMe: boolean) {
    this._rememberMe = rememberMe;
  }

  get rememberMe(): boolean { return this._rememberMe; }

  onSubmit() {
    this.Auth.loginUser(this.username, this.password, this.rememberMe);
  }

}
