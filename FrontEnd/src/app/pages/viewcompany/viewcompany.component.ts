import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company/company.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewcompany',
  templateUrl: './viewcompany.component.html',
  styleUrls: ['./viewcompany.component.scss']
})
export class ViewcompanyComponent implements OnInit {
Company = {}
edit = false;
name = "";
email = "";
address = "";
companynumber = "";
taxNumber="";
logo="";
  constructor(private router: Router, private activerouter: ActivatedRoute,private CompanySer: CompanyService) { }

  ngOnInit(): void {
    this.activerouter.paramMap.subscribe((res:any)=>{
      console.log(res)
    this.getCompany(res.params.id);

    })
  }

  saveInfo(id){
    this.edit = !this.edit;
    console.log(this.edit);
    if(this.edit!=true){

      this.activerouter.paramMap.subscribe((res:any)=>{
        console.log(res)
       this.CompanySer.updateInfo(res.params.id,this.name,this.email,this.address,this.companynumber,this.taxNumber).subscribe(
        (res:any) => {
            console.log(res);
            this.Company = res;
            this.router.navigateByUrl('viewcompanies') // In implementation navigation goes to users page
  
          }
      )
  
      })
    }
  }

  getCompany(id) {
    this.CompanySer.getCompany(id).subscribe(
      (res:any) => {
        console.log(res);
        this.Company = res;
      }
    )
  }
}
