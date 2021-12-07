import { Component, OnInit } from '@angular/core';
import { faSearch, faCartPlus,faMinus,faPlus } from '@fortawesome/free-solid-svg-icons';
import { IMultiSelectSettings, IMultiSelectTexts } from 'ngx-bootstrap-multiselect';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.scss']
})
export class ViewordersComponent implements OnInit {
  faSearch = faSearch;
  suppliers = [];
  categories=[];
  filters={purchasedate:false,supplier:false,category:false,status:false};
  faPlus = faPlus;
  faMinus = faMinus;
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
myTexts: IMultiSelectTexts= {
  checkAll: 'Select all',
  uncheckAll: 'Unselect all',
  checked: 'item selected',
  checkedPlural: 'items selected',
  searchPlaceholder: 'Find',
  searchEmptyResult: 'Nothing found...',
  searchNoRenderText: 'Type in search box to see results...',
  defaultTitle: 'Select',
  allSelected: 'All selected',
};
  constructor() { }

  ngOnInit(): void {
    this.suppliers = [
      { id: 1, name: 'Supplier 1' },
      { id: 2, name: 'Supplier 2' },
      { id: 3, name: 'Supplier 3' },
      { id: 4, name: 'Supplier 4' },
  ];
  this.categories = [
    { id: 1, name: 'Mechanical' },
    { id: 2, name: 'Electrical' },
    { id: 3, name: 'Hardware' },
];
  }
  ViewOrder(){

  }
  togglefilter(type){
    this.filters[type] = !this.filters[type]
      }
}
