import { SystemService } from './../../../service/system.service';
import { User } from './../../../model/user.class';
import { Router, ActivatedRoute } from '@angular/router';
import { JsonResponse } from './../../../model/json-response.class';
import { ProductService } from './../../../service/product.service';
import { Product } from './../../../model/product.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  title: string = "Product Detail";
  jr: JsonResponse;
  product: Product;
  user: User;

  constructor(private productSvc: ProductService,
              private router: Router,
              private route: ActivatedRoute,
              private sysSvc: SystemService) { }

  ngOnInit() {
    this.route.params
      .subscribe(parms => {
        let id = parms["id"];
        this.getProductById(id);
      });
    this.user = this.sysSvc.data.user.instance;
  }

  getProductById(id: string) {
    this.productSvc.get(id)
      .subscribe(jsresp => {
        this.jr = jsresp;
        this.product = this.jr.data as Product;
      });
  }
  
  remove(): void {
    this.productSvc.delete(this.product.id)
      .subscribe(res => {
        this.router.navigateByUrl("/product/list");
      });
  }

}
