import { JsonResponse } from './../model/json-response.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PurchaseRequestLineItem } from './../model/purchase-request-line-item.class';
import { Injectable } from '@angular/core';

const url: string = 'http://localhost:8080/purchase-request-line-items/';

@Injectable({
  providedIn: 'root'
})
export class PurchaseRequestLineItemService {

  list(): Observable <JsonResponse> {
    return this.http.get(url) as Observable<JsonResponse>;
  }

  create(prli: PurchaseRequestLineItem): Observable<JsonResponse> {
    console.log("purchaseRequestLineItemsvc.create...");
    console.log(prli);
    return this.http.post(url, prli) as Observable<JsonResponse>;
  }

  get(id: string): Observable<JsonResponse> {
    console.log("purchaseRequestLineItemsvc.get..  id="+id);
    return this.http.get(url+id) as Observable<JsonResponse>;
  }
  
  // get prlis by prid for the pr lines component
  getLines(id: string): Observable<JsonResponse> {
    console.log("purchaseRequestLineItemsvc.get Lines..  PR id="+id);
    return this.http.get(url + "lines-for-pr/" + id) as Observable<JsonResponse>;
  }

  edit(purchaseRequestLineItem: PurchaseRequestLineItem): Observable<any> {
    return this.http.put(url, purchaseRequestLineItem) as Observable<any>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}
