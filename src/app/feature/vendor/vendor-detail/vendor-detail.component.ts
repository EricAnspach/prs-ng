import { SystemService } from './../../../service/system.service';
import { User } from './../../../model/user.class';
import { Router, ActivatedRoute } from '@angular/router';
import { JsonResponse } from './../../../model/json-response.class';
import { VendorService } from './../../../service/vendor.service';
import { Vendor } from './../../../model/vendor.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {
  title: string = "Vendor Detail";
  jr: JsonResponse;
  vendor: Vendor;
  user: User;

  constructor(private vendorSvc: VendorService,
              private router: Router,
              private route: ActivatedRoute,
              private sysSvc: SystemService) { }

  ngOnInit() {
    this.route.params
      .subscribe(parms => {
        let id = parms["id"];
        this.getVendorById(id);
      });
      this.user = this.sysSvc.data.user.instance;
  }

  getVendorById(id: string) {
    this.vendorSvc.get(id)
      .subscribe(jsresp => {
        this.jr = jsresp;
        this.vendor = this.jr.data as Vendor;
      });
  }
  
  remove(): void {
    this.vendorSvc.delete(this.vendor.id)
      .subscribe(res => {
        this.router.navigateByUrl("/vendor/list");
      });
  }

}
