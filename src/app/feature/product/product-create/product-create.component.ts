import { JsonResponse } from './../../../model/json-response.class';
import { VendorService } from './../../../service/vendor.service';
import { Vendor } from './../../../model/vendor.class';
import { ProductService } from './../../../service/product.service';
import { Product } from './../../../model/product.class';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  title: string = "Product Create";
  resp: any;
  jr: JsonResponse;
  product: Product = new Product(0, new Vendor(),'','',0,'','');
  vendors: Vendor[]; 
  
  constructor(private productSvc: ProductService,
    private vendorSvc: VendorService,
    private router: Router) { }
    
    ngOnInit() {
      this.vendorSvc.list()
      .subscribe(jresp => {
        this.jr = jresp as JsonResponse;
        this.vendors = this.jr.data as Vendor[];
      });
    }
    
    create () {
      this.productSvc.create(this.product)
        .subscribe(resp => {
          this.resp = resp;
          this.router.navigate(['/product/list']);
      });
    }
}
