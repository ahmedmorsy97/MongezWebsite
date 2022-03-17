import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

import {categories, Mechanicalsubcategories, Electricalsubcategories} from '../../Utilities/utilities'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories=categories;
  mechanichalsubcategories=Mechanicalsubcategories;
  electricalsubcategories = Electricalsubcategories;

  user = null;
  type = "";

  constructor(private router:Router,private auth: AuthService) { 

  }

  ngOnInit(): void {
    this.user = this.auth.checkUser();
    this.type = localStorage.getItem("type");
    if(this.router.url.indexOf('logout') != -1) {
      this.auth.logout(localStorage.getItem("type"));
    }

    this.auth.authState.subscribe(
      state => {
        this.user = this.auth.checkUser();
        this.type = localStorage.getItem("type");
      }
    )
  }

  GoToProducts(){
   this.router.navigateByUrl('/products')
  }

}
