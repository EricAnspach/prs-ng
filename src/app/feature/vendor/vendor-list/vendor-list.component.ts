import { SystemService } from './../../../service/system.service';
import { User } from './../../../model/user.class';
import { VendorService } from './../../../service/vendor.service';
import { JsonResponse } from './../../../model/json-response.class';
import { Vendor } from './../../../model/vendor.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})

export class VendorListComponent implements OnInit {
  jr: JsonResponse;
  vendors: Vendor[];
  title: string = "Vendor List";
  user: User;

  constructor(private vendorSvc: VendorService,
              private sysSvc: SystemService) { }

  ngOnInit() {
    this.vendorSvc.list().subscribe(jresp => {
        this.jr = jresp;
        this.vendors = this.jr.data as Vendor[];
        console.log(this.vendors);
      });
    this.user = this.sysSvc.data.user.instance;
  }

}
