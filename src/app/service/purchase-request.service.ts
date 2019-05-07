import { PurchaseRequest } from './../model/purchase-request.class';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from './../model/json-response.class';
import { Injectable } from '@angular/core';

const url: string = 'http://localhost:8080/purchase-requests/';

@Injectable({
  providedIn: 'root'
})
export class PurchaseRequestService {

  list(): Observable <JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  listreview(id: string): Observable <JsonResponse> {
    return this.http.get(url + "list-review/" + id) as Observable<JsonResponse>;
  }

  create(purchaseRequest: PurchaseRequest): Observable<JsonResponse> {
    console.log("purchaseRequestsvc.create...");
    return this.http.post(url + "submit-new", purchaseRequest) as Observable<JsonResponse>;
  }

  get(id: string): Observable<JsonResponse> {
    console.log("purchaseRequestsvc.get..  id="+id);
    return this.http.get(url+id) as Observable<JsonResponse>;
  }

  edit(purchaseRequest: PurchaseRequest): Observable<JsonResponse> {
    return this.http.put(url, purchaseRequest) as Observable<JsonResponse>;
  }
  
  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }
  
  submitreview(purchaseRequest: PurchaseRequest): Observable<JsonResponse> {
    return this.http.put(url + "submit-review", purchaseRequest) as Observable<JsonResponse>;
  }

  // get purchase requests to review, but not belonging to reviewer

  constructor(private http: HttpClient) { }
}
