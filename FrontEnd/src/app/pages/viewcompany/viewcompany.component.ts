import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company/company.service';
import { Router } from '@angular/router';

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
  constructor(private router: Router, private CompanySer: CompanyService) { }

  ngOnInit(): void {
    this.getCompany("")
  }

  saveInfo(id){
    this.edit = !this.edit;
    console.log(this.edit);
    if(this.edit!=true){
      this.CompanySer.updateInfo( id,this.name,this.email,this.address,this.companynumber,this.taxNumber).subscribe(
        (res:any) => {
          console.log(res);
          this.Company = res;
          this.router.navigateByUrl('') // In implementation navigation goes to companys page

        }
      )
    }
  }

  getCompany(id) {
    this.CompanySer.getCompany({
      ...id,
    }).subscribe(
      (res:any) => {
        console.log(res);
        this.Company = res;
      }
    )
  }
}
