import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';

const routes: Routes = [
  {path:'', redirectTo: '/user/list', pathMatch: 'full' },
  {path:'user/list', component: UserListComponent},
  {path:'user/create', component: UserCreateComponent},
  {path:'user/edit/:id', component: UserEditComponent},
  {path:'user/detail/:id', component: UserDetailComponent},
  {path:'user/remove/:id', component: UserDetailComponent},
  {path:'vendor/list', component: VendorListComponent},
  {path:'vendor/create', component: VendorCreateComponent},
  {path:'product/list', component: ProductListComponent},
  {path:'product/create', component: ProductCreateComponent},
  
  {path:'**', component: UserListComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
