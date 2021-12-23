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
    return this.http.get(this.baseUrl+'/viewcompany/'+'61c498763811283cc0748315');
  }
  
}
