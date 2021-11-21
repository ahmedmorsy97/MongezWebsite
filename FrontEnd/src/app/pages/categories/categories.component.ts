import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
@Input() categories = []
@Input() Mechanicalsubcategories = []
@Input() ELectricalsubcategories = []
constructor(private router:Router) { 

}
  ngOnInit(): void {
  }
  NavigatetoSubCategory(category){
    this.router.navigateByUrl(category.route || "/products");
  
  }

}
