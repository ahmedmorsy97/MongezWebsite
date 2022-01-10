import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  baseUrl: string = `${environment.baseUrl}/supplier`;
  supplier :any;

  constructor(private http: HttpClient) { }

  getSupplier(id: string) {
    return this.http.get(this.baseUrl+'/viewsupplier/'+id);
  }
  getSuppliers(){
    return this.http.get(this.baseUrl+'/allsuppliers');
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
  updateInfo( id,firstname,lastname,password,mobileNumber,dateOfBirth,email,address){
 const url = `${this.baseUrl}/updatemyinfo/`+id;
    this.supplier= this.http.get(this.baseUrl+'/viewsupplier/'+id); ;
    if(firstname=="")
    firstname = this.supplier.firstname
     if(lastname=="")
    lastname = this.supplier.lastname
     if(password=="")
    password = this.supplier.password
     if(mobileNumber=="")
    mobileNumber = this.supplier.mobileNumber
     if(dateOfBirth=="")
    dateOfBirth = this.supplier.dateOfBirth
     if(email=="")
    email = this.supplier.email
    if(address=="")
    address = this.supplier.address
    // if(logo=="")
    // logo = this.supplier.logo;

    return this.http.patch(url, {
   firstname,
   lastname,
   password,
   mobileNumber,
   dateOfBirth,
   email
  // logo,
    
    });
  }
}
