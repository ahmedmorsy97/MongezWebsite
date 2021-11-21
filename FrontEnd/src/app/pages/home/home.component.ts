import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router:Router) { 

  }

  ngOnInit(): void {
  }
  GoToProducts(){
   this.router.navigateByUrl('/products')
  }

}
