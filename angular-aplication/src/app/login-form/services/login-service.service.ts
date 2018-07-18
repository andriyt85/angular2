import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LoginServiceService {

constructor(private http: HttpClient) { }

  signIn(data) {
    return this.http.post('sign-in', data);
  }

}
