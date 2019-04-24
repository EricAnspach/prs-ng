import { JsonResponse } from './../../../model/json-response.class';
import { User } from './../../../model/user.class';
import { UserService } from './../../../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  title: string = 'User Edit';

  jr: JsonResponse;
  id: string;
  resp: any;

  user: User;

  constructor(private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    console.log("user edit ngOnInit", "id = " + this.id);
    this.userSvc.get(this.id)
      .subscribe(jrresp => {
        this.jr = jrresp;
        console.log("1");
        this.user = this.jr.data as User; 
        console.log("user",this.user);
      });
  }

  edit () {
    this.userSvc.edit(this.user)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/user/list']);
    });
  }

}
