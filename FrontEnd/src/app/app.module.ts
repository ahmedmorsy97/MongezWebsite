import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { HomeComponent } from './pages/home/home.component';
// import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './component/navbar/navbar.component';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { LoginComponent } from './component/login/login.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CreatecompanyComponent } from './pages/createcompany/createcompany.component';
import { CreateuserComponent } from './pages/createuser/createuser.component';
import { CreatesupplierComponent } from './pages/createsupplier/createsupplier.component';
import { CreateproductComponent } from './pages/createproduct/createproduct.component';
import { ViewcompanyComponent } from './pages/viewcompany/viewcompany.component';
import { ViewuserComponent } from './pages/viewuser/viewuser.component';
import { ViewsupplierComponent } from './pages/viewsupplier/viewsupplier.component';
import { ViewproductComponent } from './pages/viewproduct/viewproduct.component';
import { NgxBootstrapMultiselectModule } from 'ngx-bootstrap-multiselect';
import { ViewordersComponent } from './pages/vieworders/vieworders.component';

// export function createTranslateLoader(http: HttpClient) {

//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SupplierComponent,
    CustomerComponent,
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    CategoriesComponent,
    LoginComponent,
    CreatecompanyComponent,
    CreateuserComponent,
    CreatesupplierComponent,
    CreateproductComponent,
    ViewcompanyComponent,
    ViewuserComponent,
    ViewsupplierComponent,
    ViewproductComponent,
    ViewordersComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    ModalModule.forRoot(),
    NgxBootstrapMultiselectModule
  //   TranslateModule.forRoot({
  //     defaultLanguage: 'en',
  //     loader: {
  //       provide: TranslateLoader,
  //       useFactory: (createTranslateLoader),
  //       deps: [HttpClient]
  //     }
  //   })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
