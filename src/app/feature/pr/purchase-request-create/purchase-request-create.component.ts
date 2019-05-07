import { SystemService } from './../../../service/system.service';
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
  user: User;
  purchaserequest: PurchaseRequest;  
  
  constructor(private purchaseRequestSvc: PurchaseRequestService,
    private router: Router,
    private sysSvc: SystemService) { }
    
    ngOnInit() {
      this.user = this.sysSvc.data.user.instance;
      this.purchaserequest = new PurchaseRequest(0, this.user, '','', new Date(),'','',0, new Date(),'');
      console.log("ngOnInit PR Create - user: " + this.user);
      console.log("purchaserequest username ngOnInit", "name = " + this.user.userName);
    }
    
    create() {
      this.purchaseRequestSvc.create(this.purchaserequest).subscribe(jresp => {
        this.purchaserequest = jresp.data as PurchaseRequest;
        this.router.navigate(['/purchaserequest/list']);
      });
    }
}
