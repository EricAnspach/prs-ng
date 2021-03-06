import { JsonResponse } from './../../../model/json-response.class';
import { PurchaseRequestService } from './../../../service/purchase-request.service';
import { PurchaseRequest } from './../../../model/purchase-request.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-request-list',
  templateUrl: './purchase-request-list.component.html',
  styleUrls: ['./purchase-request-list.component.css']
})
export class PurchaseRequestListComponent implements OnInit {

  jr: JsonResponse;
  purchaserequests: PurchaseRequest[];
  title: string = "Purchase Request List";

  constructor(private purchaseRequestSvc: PurchaseRequestService) { }

  ngOnInit() {
    this.purchaseRequestSvc.list().subscribe(jresp => {
        this.jr = jresp;
        this.purchaserequests = this.jr.data as PurchaseRequest[];
        console.log(this.purchaserequests);
      });
  }

}
