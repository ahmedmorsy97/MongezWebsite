import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

import {categories,Mechanicalsubcategories,Electricalsubcategories} from '../../Utilities/utilities'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories=categories;
  mechanichalsubcategories=Mechanicalsubcategories;
  electricalsubcategories = Electricalsubcategories;

  constructor(private router:Router,private auth: AuthService) { 

  }

  ngOnInit(): void {
    console.log(this.router.url);
    if(this.router.url.indexOf('logout')!=-1){
     this.auth.logout(localStorage.getItem("type"));
  }
}
  GoToProducts(){
   this.router.navigateByUrl('/products')
  }

}
