import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faMinus, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { IMultiSelectSettings, IMultiSelectTexts } from 'ngx-bootstrap-multiselect';
import { ProductsService } from 'src/app/services/product/products.service';
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
  products = [];
  filters = { purchasedate: false, user: false, product: false, status: false };
  // ["products.dateOfPurchase"]
  // ["products.product"]
  // ["products.status"]
  filterData = {
    date: {
      from: null,
      to: null
    },
    products: null,
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
    private SupplierServ: SupplierService, 
    private router: Router, 
    private UserSer: UserService,
    private ProductSer: ProductsService
  ) { }

  ngOnInit(): void {
    this.ViewOrder();
    this.viewproducts();
  }

  viewproducts() {
    this.ProductSer.getmyProducts().subscribe(
      (res: any) => {
        this.products = res.map(el => ({
          id: el._id,
          name: el.productName
        }))
      }
    )
  }

  viewuser(id) {
    this.router.navigateByUrl('viewuser/' + id)
  }

  applyFilter() {
    const query = {
      ["products.dateOfPurchase"]: this.filterData.date.from && this.filterData.date.to && {
        $gte: this.filterData.date.from || null,
        $lte: this.filterData.date.to || null
      },
      ["products.product"]: {
        $in: this.filterData.products?.map(product => product) || null
      },
      $or: Object.keys(this.filterData.status).map(el => ({['products.status']: this.filterData.status[el] ? el : null})).filter(el => el['products.status']) || null
    }

    if(!query["products.product"].$in || query["products.product"].$in.length == 0) delete query["products.product"];
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
      products: null,
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

  ViewOrder(query = null) {
    this.SupplierServ.getmyorders(query).subscribe(
      res => {
        this.orders = res
        // console.log(this.orders)
      }
    )
  }

  togglefilter(type) {
    this.filters[type] = !this.filters[type]
  }

  viewproduct(id) {
    this.router.navigateByUrl('/viewproduct/' + id)
  }

  changestatus(status, orderid, productid) {
    this.UserSer.changeorderstatus(status, orderid, productid).subscribe(res => this.ViewOrder());
  }
}
