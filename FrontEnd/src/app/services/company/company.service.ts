import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  baseUrl: string = `${environment.baseUrl}/company`;

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
}
