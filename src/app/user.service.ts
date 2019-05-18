import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _id: number;
  private _username: string;
  private _email: string;
  private _isLoggedIn: boolean;

  loginUser(id: number, username: string, email: string) {
    this.isLoggedIn = true;
    this.id = id;
    this.username = username;
    this.email = email;
  }

  logoutUser(): void {
    this.isLoggedIn = false;
  }

  set id(id: number) {
    this._id = id;
  }

  get id(): number {
    return this._id;
  }

  set username(username: string) {
    this._username = username.trim();
  }

  get username(): string {
    return this._username;
  }

  set email(email: string) {
    this._email = email.trim();
  }

  get email(): string {
    return this._email;
  }

  set isLoggedIn(isLoggedIn: boolean) {
    this._isLoggedIn = isLoggedIn;
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

}
