import { Router, ActivatedRoute } from '@angular/router';
import { JsonResponse } from './../../../model/json-response.class';
import { PurchaseRequestService } from './../../../service/purchase-request.service';
import { PurchaseRequest } from './../../../model/purchase-request.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-request-edit',
  templateUrl: './purchase-request-edit.component.html',
  styleUrls: ['./purchase-request-edit.component.css']
})
export class PurchaseRequestEditComponent implements OnInit {

  title: string = 'PurchaseRequest Edit';

  jr: JsonResponse;
  id: string;
  resp: any;

  purchaserequest: PurchaseRequest;

  constructor(private purchaseRequestSvc: PurchaseRequestService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    console.log("purchaserequest edit ngOnInit", "id = " + this.id);
    this.purchaseRequestSvc.get(this.id)
      .subscribe(jrresp => {
        this.jr = jrresp;
        console.log("1");
        this.purchaserequest = this.jr.data as PurchaseRequest; 
        console.log("purchaserequest",this.purchaserequest);
      });
  }

  edit () {
    this.purchaseRequestSvc.edit(this.purchaserequest)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/purchaserequest/list']);
    });
  }

  remove(): void {
    this.purchaseRequestSvc.delete(this.purchaserequest.id)
      .subscribe(res => {
        this.router.navigateByUrl("/purchaserequest/list");
      });
  }

}
