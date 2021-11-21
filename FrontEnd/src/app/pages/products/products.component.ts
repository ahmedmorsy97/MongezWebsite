import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {categories,Mechanicalsubcategories,Electricalsubcategories} from '../../Utilities/utilities'
import { faPlus,faMinus} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
categories=categories;
mechanicalsubcategories=Mechanicalsubcategories;
electricalsubcategories = Electricalsubcategories;
selectedcategory =[];
faPlus = faPlus;
faMinus = faMinus;
constructor(private router:Router) { 

}
  ngOnInit(): void {
   const url = this.router.url.replace("/products","").split("/");
 if(url.length==1){
  this.selectedcategory = categories;
 }
 else if(url.length==2){
    switch (url[1]){
      case "electrical": this.selectedcategory=this.electricalsubcategories;break;
      case "mechanical": this.selectedcategory=this.mechanicalsubcategories;break;
    }
  }

  }
  ViewProduct(){
     this.router.navigateByUrl('/viewproduct')
  }
}
