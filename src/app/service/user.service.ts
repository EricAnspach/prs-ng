import { User } from './../model/user.class';
import { JsonResponse } from './../model/json-response.class';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url: string = 'http://localhost:8080/users/';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  
  login(user: User): Observable<JsonResponse> {
    return this.http.post(url + "authenticate", user) as Observable<JsonResponse>;
  }

  list(): Observable <JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  create(user: User): Observable<JsonResponse> {
    console.log("usersvc.create...");
    return this.http.post(url, user) as Observable<JsonResponse>;
  }

  get(id: string): Observable<JsonResponse> {
    console.log("usersvc.get..  id="+id);
    return this.http.get(url+id) as Observable<JsonResponse>;
  }

  edit(user: User): Observable<any> {
    return this.http.put(url, user) as Observable<any>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}
