import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ViewproductComponent } from './pages/viewproduct/viewproduct.component';

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
  
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


