import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LoginService {

constructor(private http: HttpClient) { }

  setSecureToken(secure_token: string) {
    localStorage.setItem('LoggedIn', secure_token);
  }

  getSecureToken() {
    return localStorage.getItem('LoggedIn');
  }

  isLogged() {
    return this.getSecureToken() !== null;
  }

  signIn(data) {
    this.setSecureToken(data.name);
    return this.http.post('sign-in', data);
  }

  signUp(data) {
    return this.http.post('sign-up', data);
  }
}
