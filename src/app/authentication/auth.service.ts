import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usermodel } from './auth Model/usermodel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    authUrl = 'http://localhost:3200/api/';
  constructor( private http: HttpClient ) { }
  user_registration(user) {
    console.log(user);

    return this.http.post<any>(this.authUrl + 'register', user);
  }
  user_login(user) {
      return this.http.post<any>(this.authUrl + 'login', user);
  }
}
