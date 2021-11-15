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
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule
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
