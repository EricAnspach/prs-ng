import { User } from './../../../model/user.class';
import { SystemService } from './../../../service/system.service';
import { PurchaseRequestService } from './../../../service/purchase-request.service';
import { PurchaseRequest } from './../../../model/purchase-request.class';
import { JsonResponse } from './../../../model/json-response.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-request-review',
  templateUrl: './purchase-request-review.component.html',
  styleUrls: ['./purchase-request-review.component.css']
})
export class PurchaseRequestReviewComponent implements OnInit {
  constructor(private purchaseRequestSvc: PurchaseRequestService,
              private sysSvc: SystemService) { }

  jr: JsonResponse;
  purchaserequests: PurchaseRequest[];
  title: string = "Purchase Request Review";
  user: User;
  id: string = this.sysSvc.data.user.instance.id;

  ngOnInit() {
    this.purchaseRequestSvc.listreview(this.id).subscribe(jresp => {
        this.jr = jresp;
        this.purchaserequests = this.jr.data as PurchaseRequest[];
        console.log(this.purchaserequests);
      });
  }
}
