import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
@Input() categories = []
  constructor() { }

  ngOnInit(): void {
  }
  NavigatetoSubCategory(category){
    console.log(category);
  }

}
