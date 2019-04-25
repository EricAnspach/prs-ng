import { VendorService } from './../../../service/vendor.service';
import { Router } from '@angular/router';
import { Vendor } from './../../../model/vendor.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  title: string = "Vendor Create";
  resp: any;
  vendor: Vendor = new Vendor(0,'','','','','','','','',false);

  create () {
    this.vendorSvc.create(this.vendor)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/vendor/list']);
    });
  } 

  constructor(private vendorSvc: VendorService,
    private router: Router) { }

  ngOnInit() {
  }

}
