import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faMinus, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { IMultiSelectSettings, IMultiSelectTexts } from 'ngx-bootstrap-multiselect';
import { SupplierService } from 'src/app/services/supplier/supplier.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-vieworderstome',
  templateUrl: './vieworderstome.component.html',
  styleUrls: ['./vieworderstome.component.scss']
})
export class VieworderstomeComponent implements OnInit {
  faSearch = faSearch;
  users = [];
  categories=[];
  filters={purchasedate:false,user:false,category:false,status:false};
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
  constructor( private SupplierServ: SupplierService,private router:Router,private UserSer: UserService) { }
  orders:any = []

  ngOnInit(): void {
    this.ViewOrder();
    this.users = [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
      { id: 3, name: 'User 3' },
      { id: 4, name: 'User 4' },
  ];
  this.categories = [
    { id: 1, name: 'Mechanical' },
    { id: 2, name: 'Electrical' },
    { id: 3, name: 'Hardware' },
];
  }
  viewuser(id){
    this.router.navigateByUrl('viewuser/'+id)
  }
  ViewOrder(){
    this.SupplierServ.getmyorders().subscribe(res=>{this.orders =res
    console.log(this.orders)})
  }
  togglefilter(type){
    this.filters[type] = !this.filters[type]
      }
      changestatus(status,orderid,productid){
        this.UserSer.changeorderstatus(status,orderid,productid).subscribe(res=>this.ViewOrder());
      }
}
