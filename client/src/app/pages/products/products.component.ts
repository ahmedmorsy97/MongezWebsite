import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categories, Mechanicalsubcategories, Electricalsubcategories } from '../../Utilities/utilities'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'ngx-bootstrap-multiselect';
import { ProductsService } from 'src/app/services/product/products.service';
import { UserService } from 'src/app/services/user/user.service';
import { PropertyRead } from '@angular/compiler';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SupplierService } from 'src/app/services/supplier/supplier.service';
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
    ["priceRange.priceofRange"]: {
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

  user = null;
  type = "";

  constructor(
    private router: Router,
    private auth: AuthService,
    private ActiveRoute: ActivatedRoute,
    private ProductSer: ProductsService,
    private UserSer: UserService,
    private SupplierSer: SupplierService
  ) {
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
    allSelected: 'All sected',
  };

  filterParsed: any = {};

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

    this.getProducts();
    this.ActiveRoute.queryParams.subscribe(res => {
      // console.log(res)
      res.search && this.getProducts(this.filterParsed, res.search)
    });

    this.user = this.auth.checkUser() ? JSON.parse(this.auth.checkUser()) : null;
    this.type = localStorage.getItem("type");

    this.auth.authState.subscribe(
      state => {
        this.user = this.auth.checkUser() ? JSON.parse(this.auth.checkUser()) : null;
        this.type = localStorage.getItem("type");
      }
    )
    this.getSuppliers();
  }

  getSuppliers() {
    if(this.user) {
      this.SupplierSer.getSuppliers(null).subscribe(
        (res: any) => {
          // console.log(res);
          this.suppliers = res?.map?.(el => ({
            id: el._id,
            name: `${el.firstname} ${el.lastname}`
          }))
        }
      )
    }
  }

  applyFilter() {
    // console.log(this.filterData);
    this.filterParsed = {
      ["priceRange.priceofRange"]: this.filterData["priceRange.priceofRange"].from && this.filterData["priceRange.priceofRange"].to && {
        $gte: this.filterData["priceRange.priceofRange"].from || null,
        $lte: this.filterData["priceRange.priceofRange"].to || null
      },
      description: this.filterData.description && {
        $regex: this.filterData.description,
        $options: "i"
      },
      $or: this.filterData.supplier?.map(supplier => ({ supplier })) || null,
      rating: this.filterData.productrating || null
    }

    Object.keys(this.filterParsed).forEach(el => {
      if (!this.filterParsed[el]) delete this.filterParsed[el]
    })

    // console.log(this.filterParsed);
    this.getProducts(this.filterParsed);
  }

  clearFilter() {
    this.filterData = {
      ["priceRange.priceofRange"]: {
        from: null,
        to: null
      },
      description: null,
      supplier: null,
      productrating: null,
      supplierrating: null,
    }
    this.applyFilter();
  }

  getProducts(filters = null, search = null) {
    const queryBody = { ...(filters || this.filterParsed), category: this.category, Subcategory: this.subcategory };
    if (!queryBody.category) delete queryBody.category;
    if (!queryBody.Subcategory) delete queryBody.Subcategory;

    this.ProductSer.getProducts({
      search,
      queryBody,
      page: this.fetchInfo.page,
      limit: this.fetchInfo.limit
    }).subscribe(
      (res: any) => {
        // console.log(res);
        this.products = res.products.map(element => ({ ...element, customerquantity: 1 })); // Add this attribute to the object product
      }
    )
  }

  ViewProduct(id) {
    this.router.navigateByUrl('/viewproduct/' + id)
  }
  togglefilter(type) {
    this.filters[type] = !this.filters[type]
  }
  onChange() {
    // console.log(this.optionsModel);
  }
  addToCart(product) {
    if (product.customerquantity <= product.quantity && product.customerquantity > 0) {
      const price = this.getprice(product);
      this.UserSer.AddtoCart(product._id, product.customerquantity, product.productName, price, product.productLogo, product.supplier).subscribe(
        res => {
          alert("Product added to cart")
        },
        err => {
          alert("Something went wrong")
        }
      );
    }
    if (product.customerquantity > product.quantity) {
      alert("You've exceeded the available quanity fro this product")
    }

    if (product.customerquantity <= 0) {
      alert("You can't order for 0 or less")
    }
  }
  incrementQuanity(product) {
    if (!product.customerquantity) {
      product.customerquantity = 0;
    }
    if (product.customerquantity < product.quantity)
      product.customerquantity += 1;
  }

  decrementQuanity(product) {
    if (!product.customerquantity) {
      product.customerquantity = 0;
    }
    if (product.customerquantity > 0)
      product.customerquantity -= 1;
  }
  getprice(product) {
    let price = 0;
    product.priceRange.forEach((element, index) => {
      if (index == product.priceRange.length - 1 && product.customerquantity >= element.minquantity) {
        price = element.priceofRange;
        return price;
      }
      else {
        if (product.customerquantity >= element.minquantity && product.customerquantity <= element.maxquantity) {
          price = element.priceofRange;
          return price;
        }
      }
    });
    if (price == 0 && product.priceRange.length > 0) {
      price = product.priceRange[0].priceofRange;
    }
    return price;
  }
}
