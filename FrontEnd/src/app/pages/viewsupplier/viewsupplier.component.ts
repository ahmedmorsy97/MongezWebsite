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
email="";
firstname="";
lastname="";
username="";
password="";
address = "";
mobileNumber="";
dateOfBirth="";
nationalID="";
// companyName="";
taxNumber ="";
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


saveInfo(id){
    this.edit = !this.edit;
    console.log(this.edit);
    if(this.edit!=true){
 this.activerouter.paramMap.subscribe((res:any)=>{
      console.log(res)
     this.SupplierSer.updateInfo(res.params.id,this.firstname,this.lastname,this.password,this.mobileNumber,this.dateOfBirth,this.email,this.address).subscribe(
      (res:any) => {
          console.log(res);
          this.Supplier = res;
          this.router.navigateByUrl('') // In implementation navigation goes to users page

        }
    )

    })
    }
  }

}
