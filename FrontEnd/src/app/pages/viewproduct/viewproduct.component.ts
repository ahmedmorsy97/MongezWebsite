import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlus,faMinus} from '@fortawesome/free-solid-svg-icons';
import { ProductsService } from 'src/app/services/product/products.service';
@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.scss']
})
export class ViewproductComponent implements OnInit {
faPlus = faPlus;
faMinus = faMinus;
product:any
err: string = null;
constructor(private router: Router,private activerouter: ActivatedRoute, private ProductSer: ProductsService) { }

  ngOnInit(): void {
    this.activerouter.paramMap.subscribe((res:any)=>{
      console.log(res)
    this.ProductSer.viewProduct(res.params.id).subscribe(
      (res: any) => {
      console.log(res)
      this.product = res
      }, err => {
        this.err = err?.error?.err || "Something went wrong";
      }
    )
  
    })
  }
  addtoCart(id){
    
  }

}
