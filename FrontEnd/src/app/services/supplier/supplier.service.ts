import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  baseUrl: string = `${environment.baseUrl}/supplier`;

  constructor(private http: HttpClient) { }

  getSupplier(id: string) {
    return this.http.get(this.baseUrl+'/viewsupplier/'+id);
  }

  updateSupplierinfo(){
    
  }
  createSupplier(firstname,lastname,username,email,password,mobileNumber,dateOfBirth,nationalID,companyName,taxNumber,image,address){
    const url = `${this.baseUrl}/registerSuppliertest`;
    return this.http.post(url, {
      firstname,
      lastname,
      username,
      email,
      password,
      mobileNumber,
      dateOfBirth,
      nationalID,
      companyName,
      taxNumber,
      image,
      address
    });
  }
}
