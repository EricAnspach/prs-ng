import { VendorService } from './../../../service/vendor.service';
import { Vendor } from './../../../model/vendor.class';
import { ProductService } from './../../../service/product.service';
import { JsonResponse } from './../../../model/json-response.class';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequestLineItemService } from './../../../service/purchase-request-line-item.service';
import { PurchaseRequestLineItem } from './../../../model/purchase-request-line-item.class';
import { Component, OnInit } from '@angular/core';
import { Product } from './../../../model/product.class';

@Component({
  selector: 'app-purchase-request-line-item-create',
  templateUrl: './purchase-request-line-item-create.component.html',
  styleUrls: ['./purchase-request-line-item-create.component.css']
})

export class PurchaseRequestLineItemCreateComponent implements OnInit {
  title: string = "Purchase Request Line Item Create";

  jr: JsonResponse;
  id: string;
  resp: any;
  product: Product = new Product(0, new Vendor(),'','',0,'','');
  products: Product[];

  purchaseRequestLineItem: PurchaseRequestLineItem; 
  
  constructor(private prliSvc: PurchaseRequestLineItemService,
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }
    
    ngOnInit() {
      this.route.params.subscribe(parms => this.id = parms['id']);
      console.log("purchaseRequestLineItem edit ngOnInit", "id = " + this.id);
      this.prliSvc.get(this.id).subscribe(jresp => {
        this.jr = jresp;
        console.log("1");
        this.purchaseRequestLineItem = this.jr.data as PurchaseRequestLineItem; 
        console.log("purchaseRequestLineItem",this.purchaseRequestLineItem);
      });
      this.productSvc.list().subscribe(jresp => {
        this.jr = jresp as JsonResponse;
        this.products = this.jr.data as Product[];
      });
    }
    
    create () {
      this.prliSvc.create(this.purchaseRequestLineItem)
        .subscribe(resp => {
          this.resp = resp;
          this.router.navigate(['/purchaseRequest/lines']);
      });
    }
}
