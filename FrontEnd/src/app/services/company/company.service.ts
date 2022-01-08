import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  baseUrl: string = `${environment.baseUrl}/company`;
  company :any;
  constructor(private http: HttpClient) { 
    
  }

  getCompany(id: any = {}) {
    return this.http.get(this.baseUrl+'/viewcompany/'+'61745abb6ca3910d0cb41c47');
  }
  createCompany(name,email,address,companyNumber,taxNumber,logo){
    const url = `${this.baseUrl}/createcompanytest`;
    return this.http.post(url, {
      name,
      email,
      address,
      companyNumber,
      taxNumber,
      logo,
    
    });
  }

  updateInfo( id,name,email,address,companyNumber,taxNumber){
    const url = `${this.baseUrl}/updateCompanytest/`+'61745abb6ca3910d0cb41c47';
    this.company= this.http.get(this.baseUrl+'/viewcompany/'+'61745abb6ca3910d0cb41c47');
    if(name=="")
    name = this.company.name;
    if(email=="")
    email = this.company.email;
    if(address=="")
    address = this.company.address;
    if(companyNumber=="")
    companyNumber = this.company.companynumber;
    if(taxNumber=="")
    taxNumber = this.company.taxNumber;
    // if(logo=="")
    // logo = this.company.logo;

    return this.http.patch(url, {
      name,
      email,
      address,
      companyNumber,
      taxNumber,
      // logo,
    
    });


  }
}
