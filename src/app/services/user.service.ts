import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  userData() {
    return this.http.get(this.url + '/todos');
  }
  userPhots() {
    return this.http.get(this.url + '/photos');
  }
}
