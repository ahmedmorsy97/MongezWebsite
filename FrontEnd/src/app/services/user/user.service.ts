import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = `${environment.baseUrl}/user`;
  user :any;
  constructor(private http: HttpClient) { }
  
  getUser(id:string) {
    return this.http.get(this.baseUrl+'/viewuser/'+ id);
  }

  getUsers(){
    return this.http.get(this.baseUrl+'/allusers');
  }
  createUser(firstname,lastname,username,email,password,mobileNumber,dateOfBirth,nationalID,employeeLevel,limit,wallet,image){
    const url = `${this.baseUrl}/registerEmployee`;
    return this.http.post(url, {
      firstname,
      lastname,
      username,
      email,
      password,
      mobileNumber,
      dateOfBirth,
      nationalID,
      employeeLevel,
      limit,
      wallet,
      image
    });
  }



  updateInfo( id,firstname,lastname,password,mobileNumber,dateOfBirth,email){
      const url = `${this.baseUrl}/updatemyinfo/`+id;
    this.user= this.http.get(this.baseUrl+'/viewuser/'+id); ;
    if(firstname=="")
    firstname = this.user.firstname
     if(lastname=="")
    lastname = this.user.lastname
     if(password=="")
    password = this.user.password
     if(mobileNumber=="")
    mobileNumber = this.user.mobileNumber
     if(dateOfBirth=="")
    dateOfBirth = this.user.dateOfBirth
     if(email=="")
    email = this.user.email
    // if(logo=="")
    // logo = this.user.logo;

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

  AddtoCart(productid,quantity,name,price,logo){
    const url = `${this.baseUrl}/addtocart`;
    

    return this.http.patch(url, {
    productid,
    quantity,
    name,
    price,
    logo
    
       });
  }
}
