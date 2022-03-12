import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { BsModalService } from 'ngx-bootstrap/modal';
import { RestockComponent } from 'src/app/component/restock/restock.component';
import { ProductsService } from 'src/app/services/product/products.service';

@Component({
  selector: 'app-viewmyproducts',
  templateUrl: './viewmyproducts.component.html',
  styleUrls: ['./viewmyproducts.component.scss']
})
export class ViewmyproductsComponent implements OnInit {
  products :any=[]
  faSearch = faSearch;
  supplier:any
  constructor(private router: Router,private activerouter: ActivatedRoute, private ProductSer: ProductsService, private ModalServ:BsModalService) { }

  ngOnInit(): void {
    this.activerouter.paramMap.subscribe((res:any)=>{
      console.log(res)
    this.getmyProducts();

    })
  }
  getmyProducts(){
    this.ProductSer.getmyProducts().subscribe(
      (res:any) => {
        console.log(res);
        this.products = res;
        console.log("Products",this.products)
      }
    )
  
  
  }
  viewProduct(id:string){
    this.router.navigateByUrl('/viewproduct/'+id+"")
   
  }

  deleteProduct(id){
    this.ProductSer.removeproduct(id).subscribe(res=>{
      alert("Product Successfully Deleted")
      this.getmyProducts();
    })
  }
  restock(id){
    this.ModalServ.show(RestockComponent,{initialState:{
      id
    }}).content.sucess.subscribe(res=>{
      alert("Product Restocked Successfully")
      this.getmyProducts();
    })
  }
}
