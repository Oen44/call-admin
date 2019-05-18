import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { throwError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

interface LoginData {
  success: boolean,
  message: string,
  user_id: number,
  username: string,
  email: string
}

interface RegisterData {
  success: boolean,
  message: string,
  user_id: number,
  username: string,
  email: string
}

const API_URL = 'https://wezwij-admina.pl/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, public User: UserService, private Router: Router) { }

  registerUser(username: string, password: string, email: string) {
    return this.http.post<RegisterData>(`${API_URL}/register.php`, {
      username,
      password,
      email
    }).subscribe(data => {
      if (data.success) {
        this.User.loginUser(data.user_id, data.username, data.email);
      }
    });
  }

  loginUser(username: string, password: string, remember: boolean) {
    return this.http.post<LoginData>(`${API_URL}/auth.php`, {
      username,
      password,
      remember
    }, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      }).subscribe(data => {
        if (data.success) {
          this.User.loginUser(data.user_id, data.username, data.email);
        }
      });
  }

  loginWithGuard(): Observable<LoginData> {
    return this.http.get<LoginData>(`${API_URL}/auth_session.php`).pipe(tap(data => {
      if (!data.success)
        this.Router.navigate(['/']);
    }));
  }

  loginWithSession(): Observable<LoginData> {
    return this.http.get<LoginData>(`${API_URL}/auth_session.php`);
  }

  logout() {
    this.http.get(`${API_URL}/logout.php`).subscribe();
  }

}
