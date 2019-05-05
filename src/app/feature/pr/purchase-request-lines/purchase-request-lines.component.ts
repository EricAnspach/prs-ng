import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequestLineItemService } from './../../../service/purchase-request-line-item.service';
import { PurchaseRequestLineItem } from './../../../model/purchase-request-line-item.class';
import { PurchaseRequestService } from './../../../service/purchase-request.service';
import { PurchaseRequest } from './../../../model/purchase-request.class';
import { JsonResponse } from './../../../model/json-response.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-request-lines',
  templateUrl: './purchase-request-lines.component.html',
  styleUrls: ['./purchase-request-lines.component.css']
})
export class PurchaseRequestLinesComponent implements OnInit {

  jr: JsonResponse;
  purchaserequest: PurchaseRequest;
  prlis: PurchaseRequestLineItem[];
  title1: string = "Purchase Request Line Items";
  title2: string = "Lines";

  constructor(private purchaseRequestSvc: PurchaseRequestService,
              private prliSvc: PurchaseRequestLineItemService,
              private router: Router,
              private route: ActivatedRoute) { }

  // Put functionality for PRLI delete in ngOnInit method using params to differentiate
  // rendering the screen when an item is deleted
  ngOnInit() {
    this.route.params
      .subscribe(parms => {
        let id = parms["id"];
        this.get(id);
      });
  }
    
  get(id: string) {
    this.purchaseRequestSvc.get(id).subscribe(jsresp => {
      this.jr = jsresp;
      this.purchaserequest = this.jr.data as PurchaseRequest;
      console.log(this.purchaserequest);
    });
    this.prliSvc.getLines(id).subscribe(jresp2 => {
      this.jr = jresp2;
      this.prlis = this.jr.data as PurchaseRequestLineItem[];
      console.log(this.prlis);
    });
  }
}
