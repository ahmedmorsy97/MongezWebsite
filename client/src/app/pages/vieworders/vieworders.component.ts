import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch, faCartPlus, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { IMultiSelectSettings, IMultiSelectTexts } from 'ngx-bootstrap-multiselect';
import { SupplierService } from 'src/app/services/supplier/supplier.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.scss']
})
export class ViewordersComponent implements OnInit {
  faSearch = faSearch;
  suppliers = [];
  categories = [];
  filters = { purchasedate: false, supplier: false, category: false, status: false };
  filterData = {
    date: {
      from: null,
      to: null
    },
    suppliers: null,
    status: {
      Pending: true,
      Confirmed: true,
      Cancelled: true,
      Delivered: true,
      ["On Delivery"]: true,
    }
  }
  faPlus = faPlus;
  faMinus = faMinus;
  orders: any = [];

  // Settings configuration
  mySettings: IMultiSelectSettings = {
    enableSearch: true,
    showCheckAll: true,
    showUncheckAll: true,
    maintainSelectionOrderInTitle: true,
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
    defaultTitle: 'Select',
    allSelected: 'All selected',
  };

  constructor(
    private UserServ: UserService, 
    private SupllierServ: SupplierService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ViewOrder();
    this.ViewSuppliers();
    
    this.categories = [
      { id: 1, name: 'Mechanical' },
      { id: 2, name: 'Electrical' },
      { id: 3, name: 'Hardware' },
    ];
  }
  
  applyFilter() {
    const query = {
      ["products.dateOfPurchase"]: this.filterData.date.from && this.filterData.date.to && {
        $gte: this.filterData.date.from || null,
        $lte: this.filterData.date.to || null
      },
      ["products.supplier"]: {
        $in: this.filterData.suppliers?.map(product => product) || null
      },
      $or: Object.keys(this.filterData.status).map(el => ({['products.status']: this.filterData.status[el] ? el : null})).filter(el => el['products.status']) || null
    }

    if(!query["products.supplier"].$in || query["products.supplier"].$in.length == 0) delete query["products.supplier"];
    if(!query.$or) delete query.$or;

    Object.keys(query).forEach(el => {
      if (!query[el]) delete query[el]
    })

    this.ViewOrder(query);
  }

  clearFilter() {
    this.filterData = {
      date: {
        from: null,
        to: null
      },
      suppliers: null,
      status: {
        Pending: true,
        Confirmed: true,
        Cancelled: true,
        Delivered: true,
        ["On Delivery"]: true,
      }
    }
    this.applyFilter();
  }

  ViewSuppliers() {
    this.SupllierServ.getSuppliers(null).subscribe(
      (res: any) => {
        this.suppliers = res.map(el => ({
          id: el._id,
          name: el.companyName
        }))
      }
    )
  }

  viewproduct(id) {
    this.router.navigateByUrl('viewproduct/' + id)
  }

  viewsupplier(id) {
    this.router.navigateByUrl('viewsupplier/' + id)
  }

  ViewOrder(query = null) {
    this.UserServ.getmyorders(query).subscribe(res => {
      this.orders = res
    })
  }

  togglefilter(type) {
    this.filters[type] = !this.filters[type]
  }
}
