import { ProductService } from './../../../service/product.service';
import { Product } from './../../../model/product.class';
import { Router, ActivatedRoute } from '@angular/router';
import { JsonResponse } from './../../../model/json-response.class';
import { PurchaseRequestLineItemService } from './../../../service/purchase-request-line-item.service';
import { PurchaseRequestLineItem } from './../../../model/purchase-request-line-item.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-request-line-item-edit',
  templateUrl: './purchase-request-line-item-edit.component.html',
  styleUrls: ['./purchase-request-line-item-edit.component.css']
})

export class PurchaseRequestLineItemEditComponent implements OnInit {
  title: string = 'Purchase Request Line Item Edit';

  jr: JsonResponse;
  id: string;
  resp: any;
  products: Product[];

  purchaseRequestLineItem: PurchaseRequestLineItem;

  constructor(private prliSvc: PurchaseRequestLineItemService,
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.productSvc.list().subscribe(jresp => {
      this.jr = jresp as JsonResponse;
      this.products = this.jr.data as Product[];
    });
    this.route.params.subscribe(parms => this.id = parms['id']);
    console.log("purchaseRequestLineItem edit ngOnInit", "id = " + this.id);
    this.prliSvc.get(this.id).subscribe(jrresp => {
        this.jr = jrresp;
        console.log("1");
        this.purchaseRequestLineItem = this.jr.data as PurchaseRequestLineItem; 
        console.log("purchaseRequestLineItem",this.purchaseRequestLineItem);
      });
  }

  edit () {
    this.prliSvc.edit(this.purchaseRequestLineItem)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/purchaseRequest/lines']);
    });
  }

}
