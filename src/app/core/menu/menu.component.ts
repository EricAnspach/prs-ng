import { User } from './../../model/user.class';
import { SystemService } from './../../service/system.service';
import { Menu } from './../../model/menu.class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: Menu[] = [
    new Menu("Home","/home","This is the home menu item"),
    new Menu("User","/user/list","This is the user menu item"),
    new Menu("Vendor","/vendor/list","This is the vendor menu item"),
    new Menu("Product","/product/list","This is the product menu item"),
    new Menu("Request","/purchaserequest/list","This is the pr menu item"),
    new Menu("Review","/purchaserequest/review","This is the pr review menu item"),
    new Menu("Login","/user/login","This is the login menu item"),
    new Menu("About","/about","This is the about menu item")
  ];

  user: User;

  constructor(private sysSvc: SystemService) { }

  ngOnInit() {
    if(this.sysSvc.data.user.loggedIn) {
      // Use this line below to get user in other components
      this.user = this.sysSvc.data.user.instance;
      console.log("logged in user: ", this.user);
    } else {
      console.log("User not logged in");
    }
  }
}
