import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProductsService } from 'src/app/services/product/products.service';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.scss']
})
export class ViewproductComponent implements OnInit {
  faPlus = faPlus;
  faMinus = faMinus;
  product: any
  err: string = null;

  user = null;
  type = "";

  constructor(
    private router: Router,
    private auth: AuthService,
    private UserSer: UserService,
    private activerouter: ActivatedRoute,
    private ProductSer: ProductsService
  ) { }

  ngOnInit(): void {
    this.activerouter.paramMap.subscribe((res: any) => {
      // console.log(res)
      this.ProductSer.viewProduct(res.params.id).subscribe(
        (res: any) => {
          // console.log(res)
          this.product = {...res, customerquantity: 1}
        }, err => {
          this.err = err?.error?.err || "Something went wrong";
        }
      )

    })

    this.user = this.auth.checkUser();
    this.type = localStorage.getItem("type") ? JSON.parse(localStorage.getItem("type")) : null;

    this.auth.authState.subscribe(
      state => {
        this.user = this.auth.checkUser();
        this.type = localStorage.getItem("type") ? JSON.parse(localStorage.getItem("type")) : null;
      }
    )
  }

  addtoCart(product) {
    if(product.customerquantity<=product.quantity && product.customerquantity>0){
    const price = this.getprice();

    this.UserSer.AddtoCart(product._id,product.customerquantity,product.productName,price,product.productLogo,product.supplier).subscribe(
      res=>{
        alert("Product added to cart")
      },
      err=>{
        alert("Something went wrong")
      }
    );
    }
  if(product.customerquantity>product.quantity){
    alert("You've exceeded the available quanity fro this product")
  }
  
  if(product.customerquantity<=0){
    alert("You can't order for 0 or less")
  }
  }

  incrementQuanity(product){
    if(!product.customerquantity){
      product.customerquantity = 0;
    }
    if( product.customerquantity<product.quantity)
    product.customerquantity+=1;
  }

  decrementQuanity(product){
    if(!product.customerquantity){
      product.customerquantity = 0;
    }
    if(product.customerquantity>0)
    product.customerquantity-=1;
  }

  getprice() {
    let price = 0;
    this.product?.priceRange.forEach((element, index) => {
      if (index == this.product?.priceRange.length - 1 && this.product?.customerquantity >= element.minquantity) {
        price = element.priceofRange;
        return price;
      }
      else {
        if (this.product?.customerquantity >= element.minquantity && this.product?.customerquantity <= element.maxquantity) {
          price = element.priceofRange;
          return price;
        }
      }
    });
    if (price == 0 && this.product?.priceRange.length > 0) {
      price = this.product?.priceRange[0].priceofRange;
    }
    return price;
  }

}
