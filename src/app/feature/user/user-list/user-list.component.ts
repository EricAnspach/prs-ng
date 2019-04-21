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

  constructor(private userSvc: UserService) { }

  ngOnInit() {
    this.userSvc.list().subscribe(jresp => {
        this.jr = jresp;
        this.users = this.jr.data as User[];
        console.log(this.users);
      });
  }
}
