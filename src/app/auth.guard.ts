import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(public User: UserService, private Auth: AuthService, private Route: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.User.isLoggedIn) {
      return this.Auth.loginWithGuard().pipe(
        map(({ success }) => success),
        catchError(error => of(false)),
      );
    }

    return true;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.User.isLoggedIn) {
      return this.Auth.loginWithGuard().pipe(
        map(({ success }) => success),
        catchError(error => of(false))
      );
    }

    return true;
  }
}
