import { Router, ActivatedRoute } from '@angular/router';
import { JsonResponse } from './../../../model/json-response.class';
import { PurchaseRequestService } from './../../../service/purchase-request.service';
import { PurchaseRequest } from './../../../model/purchase-request.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-request-detail',
  templateUrl: './purchase-request-detail.component.html',
  styleUrls: ['./purchase-request-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {

  title: string = "PurchaseRequest Detail";
  jr: JsonResponse;
  purchaserequest: PurchaseRequest;

  constructor(private purchaseRequestSvc: PurchaseRequestService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(parms => {
        let id = parms["id"];
        this.getUserById(id);
      });
  }

  getUserById(id: string) {
    this.purchaseRequestSvc.get(id)
      .subscribe(jsresp => {
        this.jr = jsresp;
        this.purchaserequest = this.jr.data as PurchaseRequest;
      });
  }
  
  remove(): void {
    this.purchaseRequestSvc.delete(this.purchaserequest.id)
      .subscribe(res => {
        this.router.navigateByUrl("/purchaserequest/list");
      });
  }
}
  