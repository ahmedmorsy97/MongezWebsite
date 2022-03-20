import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company/company.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.component.html',
  styleUrls: ['./createcompany.component.scss']
})
export class CreatecompanyComponent implements OnInit {
  name="";
  email="";
  address="";
  number="";
  taxNumber="";
  logo="";

  err: string = null;
  constructor( private CompanyServ: CompanyService,private router:Router) { }

  ngOnInit(): void {
  }

  createCompany(){
    this.CompanyServ.createCompany(this.name,this.email,this.address,this.number,this.taxNumber,this.logo).subscribe(
      (res: any) => {
      // console.log(res)
      this.router.navigateByUrl('')
      }, err => {
        this.err = err?.error?.err || "Something went wrong";
      }
    )
  
  }

}
