import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categories, Mechanicalsubcategories, Electricalsubcategories } from '../../Utilities/utilities'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'ngx-bootstrap-multiselect';
import { ProductsService } from 'src/app/services/product/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  categories = categories;
  mechanicalsubcategories = Mechanicalsubcategories;
  electricalsubcategories = Electricalsubcategories;
  selectedcategory = [];
  category: string = null;
  subcategory: string = null;
  faPlus = faPlus;
  products: any = [];
  faMinus = faMinus;
  currentsupplierRate = 0;
  currentproductRate = 0;
  filters = { price: false, description: false, supplier: false, productrating: false, supplierrating: false };
  filterData = {
    price: {
      from: null,
      to: null
    },
    description: null,
    supplier: null,
    productrating: null,
    supplierrating: null,
  }
  optionsModel: number[];
  suppliers: IMultiSelectOption[];

  fetchInfo: any = {
    count: null,
    page: 1,
    limit: 9
  }

  constructor(private router: Router, private ProductSer: ProductsService) {

  }
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
    defaultTitle: 'Select Suppliers',
    allSelected: 'All selected',
  };

  filterParsed:any = {};

  ngOnInit(): void {
    const url = this.router.url.replace("/products", "").split("/");
    if (url.length == 1) {
      this.selectedcategory = categories;
      this.category = null;
      this.subcategory = null;
    }
    else if (url.length == 2) {
      switch (url[1]) {
        case "electrical": this.selectedcategory = this.electricalsubcategories; break;
        case "mechanical": this.selectedcategory = this.mechanicalsubcategories; break;
      }
      this.category = url[1];
      this.subcategory = null;
    } else {
      this.category = url[1];
      this.subcategory = url[2];
    }
    this.suppliers = [
      { id: 1, name: 'Supplier 1' },
      { id: 2, name: 'Supplier 2' },
      { id: 3, name: 'Supplier 3' },
      { id: 4, name: 'Supplier 4' },
    ];

    this.getProducts();
  }

  applyFilter() {
    // console.log(this.filterData);
    this.filterParsed = {
      price: this.filterData.price.from && this.filterData.price.to && {
          $gte: this.filterData.price.from || null,
          $lte: this.filterData.price.to || null
      },
      description: this.filterData.description && {
        $regex: this.filterData.description,
        $options: "i"
      },
      $or: this.filterData.supplier?.map( supplier => ({supplier})) || null,
      rating: this.filterData.productrating || null
    }

    Object.keys(this.filterParsed).forEach( el => {
      if(!this.filterParsed[el]) delete this.filterParsed[el]
    })

    // console.log(this.filterParsed);
    this.getProducts(this.filterParsed);
  }

  clearFilter() {
    this.filterData = {
      price: {
        from: null,
        to: null
      },
      description: null,
      supplier: null,
      productrating: null,
      supplierrating: null,
    }
  }

  getProducts(filters = null) {
    const queryBody = {...(filters || this.filterParsed), category: this.category, Subcategory: this.subcategory};
    if(!queryBody.category) delete queryBody.category;
    if(!queryBody.Subcategory) delete queryBody.Subcategory;

    this.ProductSer.getProducts({
      queryBody,
      page: this.fetchInfo.page,
      limit: this.fetchInfo.limit
    }).subscribe(
      (res:any) => {
        console.log(res);
        this.products = res.products;
      }
    )
  }

  ViewProduct(id) {
    this.router.navigateByUrl('/viewproduct/'+id)
  }
  togglefilter(type) {
    this.filters[type] = !this.filters[type]
  }
  onChange() {
    console.log(this.optionsModel);
  }
  addToCart(id){

  }
}
