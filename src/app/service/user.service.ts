import { JsonResponse } from './../model/json-response.class';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url: string = 'http://localhost:8080/users/';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  list(): Observable <JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}
