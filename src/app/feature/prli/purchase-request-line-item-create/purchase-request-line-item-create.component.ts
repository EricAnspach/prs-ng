import { Vendor } from './../../../model/vendor.class';
import { User } from './../../../model/user.class';
import { Router } from '@angular/router';
import { PurchaseRequestLineItemService } from './../../../service/purchase-request-line-item.service';
import { PurchaseRequestLineItem } from './../../../model/purchase-request-line-item.class';
import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from './../../../model/purchase-request.class';
import { Product } from './../../../model/product.class';

@Component({
  selector: 'app-purchase-request-line-item-create',
  templateUrl: './purchase-request-line-item-create.component.html',
  styleUrls: ['./purchase-request-line-item-create.component.css']
})

export class PurchaseRequestLineItemCreateComponent implements OnInit {
  title: string = "Purchase Request Line Item Create";
  resp: any;
  // prli: PurchaseRequestLineItem = new PurchaseRequestLineItem();
  // prli: PurchaseRequestLineItem = new PurchaseRequestLineItem(0, new PurchaseRequest(), new Product(), 0);
 
  // create () {
  //   this.prliSvc.create(this.prli)
  //     .subscribe(resp => {
  //       this.resp = resp;
  //       this.router.navigate(['/user/list']);
  //   });
  // }
 
  constructor(private prliSvc: PurchaseRequestLineItemService,
    private router: Router) { }
 
  ngOnInit() {
  }

}
