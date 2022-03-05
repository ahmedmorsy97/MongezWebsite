import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CartComponent } from './pages/cart/cart.component';
import { CreateadminComponent } from './pages/createadmin/createadmin.component';
import { CreatecompanyComponent } from './pages/createcompany/createcompany.component';
import { CreatecompanyadminComponent } from './pages/createcompanyadmin/createcompanyadmin.component';
import { CreatemanagerComponent } from './pages/createmanager/createmanager.component';
import { CreateproductComponent } from './pages/createproduct/createproduct.component';
import { CreatesupplierComponent } from './pages/createsupplier/createsupplier.component';
import { CreateuserComponent } from './pages/createuser/createuser.component';
import { HomeComponent } from './pages/home/home.component';
import { PayementComponent } from './pages/payement/payement.component';
import { ProductsComponent } from './pages/products/products.component';
import { ViewcompaniesComponent } from './pages/viewcompanies/viewcompanies.component';
import { ViewcompanyComponent } from './pages/viewcompany/viewcompany.component';
import { ViewmyproductsComponent } from './pages/viewmyproducts/viewmyproducts.component';
import { ViewmywalletComponent } from './pages/viewmywallet/viewmywallet.component';
import { ViewordersComponent } from './pages/vieworders/vieworders.component';
import { VieworderstomeComponent } from './pages/vieworderstome/vieworderstome.component';
import { ViewproductComponent } from './pages/viewproduct/viewproduct.component';
import { ViewsupplierComponent } from './pages/viewsupplier/viewsupplier.component';
import { ViewsuppliersComponent } from './pages/viewsuppliers/viewsuppliers.component';
import { ViewuserComponent } from './pages/viewuser/viewuser.component';
import { ViewusersComponent } from './pages/viewusers/viewusers.component';

const routes: Routes = [
  { path: '',component: HomeComponent},
  { path: 'logout',component: HomeComponent},
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
  { path: 'viewproduct/:id',component: ViewproductComponent},
  { path: 'createcompany',component: CreatecompanyComponent},
  { path: 'createemployee',component: CreateuserComponent},
  { path: 'createmanager',component: CreatemanagerComponent},
  { path: 'createadmin',component: CreateadminComponent},
  { path: 'createcompanyadmin',component: CreatecompanyadminComponent},
  { path: 'createsupplier',component: CreatesupplierComponent},
  { path: 'createproduct/:id',component: CreateproductComponent},
  { path: 'viewuser/:id',component: ViewuserComponent},
  { path: 'viewcompany/:id',component: ViewcompanyComponent},
  { path: 'viewsupplier/:id',component: ViewsupplierComponent},
  { path: 'viewmyorders',component: ViewordersComponent},
  { path: 'viewusers',component: ViewusersComponent},
  { path: 'viewsuppliers',component: ViewsuppliersComponent},
  { path: 'viewcompanies',component: ViewcompaniesComponent},
  { path: 'viewmywallet',component: ViewmywalletComponent},
  { path: 'viewmyproducts/:id',component: ViewmyproductsComponent},
  { path: 'about',component: AboutComponent},
  { path: 'cart/:id',component: CartComponent},
  { path: 'payement',component: PayementComponent},
  { path: 'vieworderstome',component: VieworderstomeComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


