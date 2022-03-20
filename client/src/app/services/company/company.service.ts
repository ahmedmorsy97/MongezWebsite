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

  getCompany(id: string) {
    return this.http.get(this.baseUrl+'/viewcompany/'+id);
  }
  getCompanies(search=null){
    return this.http.get(this.baseUrl+`/allcompanies${search ? `?search=${search}`: ''}`);
  }
  createCompany(name,email,address,companyNumber,taxNumber,logo){
    const url = `${this.baseUrl}/createcompany`;
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
    const url = `${this.baseUrl}/updatebyCompanyadmin`;
    const info = {
      name,
      email,
      address,
      companyNumber,
      taxNumber
    }
    Object.keys(info).forEach(el => {
      if(!info[el] || info[el]?.trim?.()?.length == 0) delete info[el];
    })

    return this.http.patch(url, info);
  }
}
