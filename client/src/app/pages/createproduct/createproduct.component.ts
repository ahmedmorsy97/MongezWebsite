import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from 'src/app/services/product/products.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.scss']
})
export class CreateproductComponent implements OnInit {
  name = "";
  description = "";
  specs = "";
  pricerange = [{ minquantity: 1, maxquantity: 10, priceofRange: 1000 }];
  quantity = "";
  category = "";
  photos = "";
  subcategory = "";
  faPlus = faPlus;
  faMinus = faMinus;
  SubCategorydata = {
    Mechanical: [{ name: "HVAC", value: "HVAC" }, { name: "FireFighting", value: "FireFighting" }, { name: "Plumbing", value: "Plumbing" }],
    Electrical: [{ name: "Light Current", value: "lightcurrent" }, { name: "High Voltage", value: "highvoltage" }, { name: "Low Voltage", value: "lowvoltage" }]
  }
  err: string = null;
  constructor(private router: Router, private activerouter: ActivatedRoute, private ProductSer: ProductsService) { }

  ngOnInit(): void {

  }
  createProduct() {
    this.activerouter.paramMap.subscribe((res: any) => {
      // console.log(res)
      this.ProductSer.createProduct(res.params.id, this.name, this.description, this.specs, this.pricerange, this.quantity, this.category, this.photos, this.subcategory).subscribe(
        (res: any) => {
          // console.log(res)
          this.router.navigateByUrl('')
        }, err => {
          this.err = err?.error?.err || "Something went wrong";
        }
      )

    })

  }
  addPriceRange() {
    this.pricerange.push({ minquantity: 0, maxquantity: 0, priceofRange: 0 });
  }

  deletePriceRange(index) {
    this.pricerange.splice(index, 1);
  }

}
