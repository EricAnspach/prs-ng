import { PurchaseRequestLineItemService } from './../../../service/purchase-request-line-item.service';
import { PurchaseRequestLineItem } from './../../../model/purchase-request-line-item.class';
import { PurchaseRequestService } from './../../../service/purchase-request.service';
import { PurchaseRequest } from './../../../model/purchase-request.class';
import { JsonResponse } from './../../../model/json-response.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-request-approve',
  templateUrl: './purchase-request-approve.component.html',
  styleUrls: ['./purchase-request-approve.component.css']
})
export class PurchaseRequestApproveComponent implements OnInit {

  jr: JsonResponse;
  purchaserequests: PurchaseRequest[];
  title1: string = "Purchase Request Approve/Reject";
  title2: string = "Lines";

  constructor(private purchaseRequestSvc: PurchaseRequestService) { }

  // Get one purchase request by id

  ngOnInit() {
    this.purchaseRequestSvc.list().subscribe(jresp => {
        this.jr = jresp;
        this.purchaserequests = this.jr.data as PurchaseRequest[];
        console.log(this.purchaserequests);
      });
  }

  // Get pr line items by purchase request id

}
