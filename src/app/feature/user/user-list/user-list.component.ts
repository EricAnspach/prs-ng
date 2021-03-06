import { SystemService } from './../../../service/system.service';
import { User } from './../../../model/user.class';
import { JsonResponse } from './../../../model/json-response.class';
import { UserService } from './../../../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  jr: JsonResponse;
  users: User[];
  title: string = "User List";
  sortCriteria: string = "userName";
  sortOrder: string = "asc"; // ascending -- or can use descending
  loggedInUser: User;

  constructor(private userSvc: UserService,
              private sysSvs: SystemService) { }

  ngOnInit() {
    this.loggedInUser = this.sysSvs.data.user.instance;
    this.userSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.users = this.jr.data as User[];
      console.log(this.users);
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
