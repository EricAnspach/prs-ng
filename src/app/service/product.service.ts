import { Product } from './../model/product.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from './../model/json-response.class';
import { Injectable } from '@angular/core';

const url: string = 'http://localhost:8080/products/';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  list(): Observable <JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  create(product: Product): Observable<any> {
    console.log("productsvc.create...");
    return this.http.post(url, product) as Observable<any>;
  }

  get(id: string): Observable<JsonResponse> {
    console.log("productsvc.get..  id="+id);
    return this.http.get(url+id) as Observable<JsonResponse>;
  }

  edit(product: Product): Observable<any> {
    return this.http.put(url, product) as Observable<any>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}
