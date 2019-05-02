import { User } from './../../../model/user.class';
import { PurchaseRequestService } from './../../../service/purchase-request.service';
import { PurchaseRequest } from './../../../model/purchase-request.class';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-request-create',
  templateUrl: './purchase-request-create.component.html',
  styleUrls: ['./purchase-request-create.component.css']
})
export class PurchaseRequestCreateComponent implements OnInit {

  title: string = "Purchase Request Create";
  resp: any;
  purchaserequest: PurchaseRequest = new PurchaseRequest(0, new User(), '','','','','',0,'','');
 
  create () {
    this.purchaseRequestSvc.create(this.purchaserequest)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/purchaserequest/list']);
    });
  }
 
  constructor(private purchaseRequestSvc: PurchaseRequestService,
    private router: Router) { }
 
  ngOnInit() {
  }

}