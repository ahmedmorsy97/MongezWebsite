import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier/supplier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createsupplier',
  templateUrl: './createsupplier.component.html',
  styleUrls: ['./createsupplier.component.scss']
})
export class CreatesupplierComponent implements OnInit {
  firstname="";
  lastname="";
  username="";
  email="";
  password="";
  mobileNumber="";
  dateOfBirth="";
  nationalID="";
  companyName="";
  taxNumber="";
  image="";
  address="";
  err: string = null;
  constructor( private SupplierServ: SupplierService,private router:Router) { }


  ngOnInit(): void {
  }
  createSupplier(){
    this.SupplierServ.createSupplier(this.firstname,this.lastname,this.username,this.email,this.password,this.mobileNumber,this.dateOfBirth,this.nationalID,this.companyName,this.taxNumber,this.image,this.address).subscribe(
      (res: any) => {
      // console.log(res)
      this.router.navigateByUrl('')
      }, err => {
        this.err = err?.error?.err || "Something went wrong";
      }
    )
  
  }
}
