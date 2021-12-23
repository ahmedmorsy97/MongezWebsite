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
  constructor(private router: Router, private CompanySer: CompanyService) { }

  ngOnInit(): void {
    this.getCompany("")
  }

  saveInfo(){
    this.edit = !this.edit;
    console.log(this.edit);
    if(this.edit==true){
  
    }
    else{
  
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
