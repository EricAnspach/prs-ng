import { SystemService } from './../../../service/system.service';
import { User } from './../../../model/user.class';
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
  title: string = "Purchase Request Line Items";
  linestitle: string = "Lines";
  user: User;

  constructor(private purchaseRequestSvc: PurchaseRequestService,
              private prliSvc: PurchaseRequestLineItemService,
              private router: Router,
              private route: ActivatedRoute,
              private sysSvc: SystemService) { }

  // Put functionality for PRLI delete in ngOnInit method using params to differentiate
  // rendering the screen when an item is deleted
  ngOnInit() {
    this.user = this.sysSvc.data.user.instance;
    this.route.params.subscribe(params => {
        let id = params.id;
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

  submit() {
    this.purchaseRequestSvc.submitreview(this.purchaserequest).subscribe(jr => {
      this.purchaserequest = jr.data as PurchaseRequest;
      this.router.navigate(['purchaserequest/list']);
    });
  }

  remove(prli:PurchaseRequestLineItem, index:number) {
    this.purchaserequest.total -= (prli.quantity * prli.product.price);
    this.prliSvc.delete(prli.id).subscribe();
    this.prlis.splice(index, 1);
    this.prlis;
  }
}



