import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatecompanyComponent } from './pages/createcompany/createcompany.component';
import { CreateproductComponent } from './pages/createproduct/createproduct.component';
import { CreatesupplierComponent } from './pages/createsupplier/createsupplier.component';
import { CreateuserComponent } from './pages/createuser/createuser.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ViewcompanyComponent } from './pages/viewcompany/viewcompany.component';
import { ViewordersComponent } from './pages/vieworders/vieworders.component';
import { ViewproductComponent } from './pages/viewproduct/viewproduct.component';
import { ViewsupplierComponent } from './pages/viewsupplier/viewsupplier.component';
import { ViewuserComponent } from './pages/viewuser/viewuser.component';

const routes: Routes = [
  { path: '',component: HomeComponent},
  { path: 'products',component: ProductsComponent},
  { path: 'products/mechanical',component: ProductsComponent},
  { path: 'products/mechanical/hvac',component: ProductsComponent},
  { path: 'products/mechanical/firefighting',component: ProductsComponent},
  { path: 'products/mechanical/plumbing',component: ProductsComponent},
  { path: 'products/electrical',component: ProductsComponent},
  { path: 'products/electrical/lightcurrent',component: ProductsComponent},
  { path: 'products/electrical/highvoltage',component: ProductsComponent},
  { path: 'products/electrical/lowvoltage',component: ProductsComponent},
  { path: 'products/hardware',component: ProductsComponent},
  { path: 'viewproduct',component: ViewproductComponent},
  { path: 'createcompany',component: CreatecompanyComponent},
  { path: 'createuser',component: CreateuserComponent},
  { path: 'createsupplier',component: CreatesupplierComponent},
  { path: 'createproduct',component: CreateproductComponent},
  { path: 'viewuser',component: ViewuserComponent},
  { path: 'viewcompany',component: ViewcompanyComponent},
  { path: 'viewsupplier',component: ViewsupplierComponent},
  { path: 'viewmyorders',component: ViewordersComponent},
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


