import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier/supplier.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-viewsupplier',
  templateUrl: './viewsupplier.component.html',
  styleUrls: ['./viewsupplier.component.scss']
})
export class ViewsupplierComponent implements OnInit {
Supplier = {};
edit = false;
  constructor(private router: Router, private activerouter: ActivatedRoute, private SupplierSer: SupplierService) { }

  ngOnInit(): void {
    this.activerouter.paramMap.subscribe((res:any)=>{
      console.log(res)
    this.getSupplier(res.params.id);

    })
  }
  getSupplier(id) {
    this.SupplierSer.getSupplier(id).subscribe(
      (res:any) => {
        console.log(res);
        this.Supplier = res;
      }
    )
  }

  saveInfo(){
    this.edit = !this.edit;
    console.log(this.edit);
    if(this.edit==false){
      
      
    }
 
  }
}
