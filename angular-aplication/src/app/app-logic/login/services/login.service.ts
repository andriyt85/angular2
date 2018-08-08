import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LoginService {

constructor(private http: HttpClient) { }

  signIn(data) {
    return this.http.post('sign-in', data);
  }

  signUp(data) {
    return this.http.post('sign-up', data);
  }
}
