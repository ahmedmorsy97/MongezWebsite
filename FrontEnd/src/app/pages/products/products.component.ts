import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {categories,Mechanicalsubcategories,Electricalsubcategories} from '../../Utilities/utilities'
import { faPlus,faMinus} from '@fortawesome/free-solid-svg-icons';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'ngx-bootstrap-multiselect';
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
currentsupplierRate = 0;
currentproductRate = 0;
filters={price:false,description:false,supplier:false,productrating:false,supplierrating:false};
optionsModel: number[];
suppliers: IMultiSelectOption[];
constructor(private router:Router) { 

}
// Settings configuration
mySettings: IMultiSelectSettings = {
  enableSearch: true,
  showCheckAll:true,
  showUncheckAll:true,
  maintainSelectionOrderInTitle:true,
  checkedStyle: 'fontawesome',
  buttonClasses: 'btn btn-primary',
  dynamicTitleMaxItems: 3,
  displayAllSelectedText: true
};

// Text configuration
myTexts: IMultiSelectTexts = {
  checkAll: 'Select all',
  uncheckAll: 'Unselect all',
  checked: 'item selected',
  checkedPlural: 'items selected',
  searchPlaceholder: 'Find',
  searchEmptyResult: 'Nothing found...',
  searchNoRenderText: 'Type in search box to see results...',
  defaultTitle: 'Select Suppliers',
  allSelected: 'All selected',
};
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
  this.suppliers = [
    { id: 1, name: 'Supplier 1' },
    { id: 2, name: 'Supplier 2' },
    { id: 3, name: 'Supplier 3' },
    { id: 4, name: 'Supplier 4' },
];
  }
  ViewProduct(){
     this.router.navigateByUrl('/viewproduct')
  }
  togglefilter(type){
this.filters[type] = !this.filters[type]
  }
  onChange() {
    console.log(this.optionsModel);
}
}
