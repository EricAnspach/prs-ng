import { PurchaseRequestService } from './../../../service/purchase-request.service';
import { PurchaseRequest } from './../../../model/purchase-request.class';
import { ProductService } from './../../../service/product.service';
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

  product: Product;
  products: Product[];
  purchaseRequest: PurchaseRequest;
  prli: PurchaseRequestLineItem = new PurchaseRequestLineItem(0, this.purchaseRequest, this.product, 0); 
  
  constructor(private prliSvc: PurchaseRequestLineItemService,
    private prSvc: PurchaseRequestService,
    private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }
    
    ngOnInit() {
      this.productSvc.list().subscribe(jr => {
        this.products = jr.data as Product[];
      });
      this.route.params.subscribe(params => {
        this.prSvc.get(params.id).subscribe(jr => {
          this.purchaseRequest = jr.data as PurchaseRequest;
          this.prli.purchaseRequest = this.purchaseRequest; 
        });
      });
    }
    
    create() {
      this.prliSvc.create(this.prli).subscribe(jresp => {
          this.prli = jresp.data as PurchaseRequestLineItem;
          console.log(this.prli);
          this.route.params.subscribe(params => {
            this.router.navigate(['purchaserequest/lines/' + params.id]);
          });
      });
    }
}
