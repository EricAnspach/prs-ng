// THIS COMPONENT NOT USED

import { JsonResponse } from './../../../model/json-response.class';
import { PurchaseRequestLineItemService } from './../../../service/purchase-request-line-item.service';
import { PurchaseRequestLineItem } from './../../../model/purchase-request-line-item.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-request-line-item-list',
  templateUrl: './purchase-request-line-item-list.component.html',
  styleUrls: ['./purchase-request-line-item-list.component.css']
})
export class PurchaseRequestLineItemListComponent implements OnInit {
  jr: JsonResponse;
  purchaseRequestLineItems: PurchaseRequestLineItem[];
  title: string = "Purchase Request Line Item List";
  sortCriteria: string = "purchaserequestlineitemname";
  sortOrder: string = "asc"; // ascending -- or can use descending

  constructor(private purchaseRequestLineItemSvc: PurchaseRequestLineItemService) { }

  ngOnInit() {
    this.purchaseRequestLineItemSvc.list().subscribe(jresp => {
        this.jr = jresp;
        this.purchaseRequestLineItems = this.jr.data as PurchaseRequestLineItem[];
        console.log(this.purchaseRequestLineItems);
      });
  }

  sortBy(column: string): void {
    if(this.sortCriteria === column) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortCriteria = column;
      this.sortOrder = 'asc';
    }
  }

}
