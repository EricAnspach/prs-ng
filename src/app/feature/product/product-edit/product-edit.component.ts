import { VendorService } from './../../../service/vendor.service';
import { Vendor } from './../../../model/vendor.class';
import { Router, ActivatedRoute } from '@angular/router';
import { JsonResponse } from './../../../model/json-response.class';
import { ProductService } from './../../../service/product.service';
import { Product } from './../../../model/product.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  title: string = 'Product Edit';
  jr: JsonResponse;
  vjr: JsonResponse;
  id: string;
  resp: any;

  pdt: Product;
  vendors: Vendor[];

  constructor(private productSvc: ProductService,
    private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // get parameters for this product
    this.route.params.subscribe(parms => this.id = parms['id']);
    console.log("product edit ngOnInit", "id = " + this.id);
      this.vendorSvc.list().subscribe(vjresp => {
        this.vjr = vjresp;
        this.vendors = this.vjr.data as Vendor[];
        console.log("000", this.vendors);
          this.productSvc.get(this.id).subscribe(jresp => {
            this.jr = jresp;      
            this.pdt = this.jr.data as Product; 
            console.log("111, product",this.pdt);
          });
     });
    }

  // from product-create.ts
  // ngOnInit() {
  //   this.vendorSvc.list()
  //   .subscribe(vjresp => {
  //     this.vjr = vjresp as JsonResponse;
  //     this.vendors = this.vjr.data as Vendor[];
  //   });
  // }

  edit () {
    this.productSvc.edit(this.pdt)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/product/list']);
    });
  }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

}
