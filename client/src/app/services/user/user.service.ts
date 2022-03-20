import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment"
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = `${environment.baseUrl}/user`;
  baseorderUrl: string = `${environment.baseUrl}/order`;
  baseproductUrl: string = `${environment.baseUrl}/product`;

  user: any;
  constructor(private http: HttpClient) { }

  getUser(id: string) {
    return this.http.get(this.baseUrl + '/viewuser/' + id);
  }

  getUsers(search = null) {
    return this.http.get(this.baseUrl + `/users${search ? `?search=${search}` : ''}`);
  }
  getallUsers(search = null, query = null) {    
    return this.http.get(this.baseUrl + `/allusers${search ? `?search=${search}` : ''}${query ? (`${search ? '&' : '?'}query=${JSON.stringify(query)}`) : ''}`);
  }

  createUser(firstname, lastname, username, email, password, mobileNumber, dateOfBirth, nationalID, employeeLevel, limit, wallet, image) {
    const url = `${this.baseUrl}/registeremployee`;
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

  createManager(firstname, lastname, username, email, password, mobileNumber, dateOfBirth, nationalID, employeeLevel, image) {
    const url = `${this.baseUrl}/registermanager`;
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
      image
    });
  }
  createCompanyAdmin(firstname, lastname, username, email, password, mobileNumber, dateOfBirth, nationalID, employeeLevel, image, company) {
    const url = `${this.baseUrl}/registerCompanyAdmin`;
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
      image,
      company
    });
  }
  createAdmin(firstname, lastname, username, email, password, mobileNumber, dateOfBirth, nationalID, employeeLevel, image) {
    const url = `${this.baseUrl}/registerAdmin`;
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
      image
    });
  }

  editLimit(userid, limit) {

    const url = `${this.baseUrl}/setemployeelimit/` + userid;

    return this.http.patch(url, {
      limit


    });
  }
  increasewallet(userid, wallet) {
    const url = `${this.baseUrl}/setemployeewallet/` + userid;

    return this.http.patch(url, {
      wallet

    });
  }

  setmywallet(amount) {
    const url = `${this.baseUrl}/setmywallet`;

    return this.http.patch(url, {
      amount

    });
  }
  delete(userid) {

    const url = `${this.baseUrl}/removeEmployee/` + userid;
    return this.http.patch(url, {

    });
  }

  updateInfo(id, firstname, lastname, password, mobileNumber, dateOfBirth, email) {
    const url = `${this.baseUrl}/updatemyinfo/`;
    this.user = this.http.get(this.baseUrl + '/viewuser/' + id);;
    if (firstname == "")
      firstname = this.user.firstname
    if (lastname == "")
      lastname = this.user.lastname
    if (password == "")
      password = this.user.password
    if (mobileNumber == "")
      mobileNumber = this.user.mobileNumber
    if (dateOfBirth == "")
      dateOfBirth = this.user.dateOfBirth
    if (email == "")
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

  AddtoCart(productid, quantity, name, price, logo, supplier) {
    const url = `${this.baseUrl}/addtocart`;

    return this.http.patch(url, {
      productid,
      quantity,
      name,
      price,
      logo,
      supplier

    });
  }

  checkout(order) {
    const url = `${this.baseorderUrl}/createorder`;
    return this.http.post(url, { ...order, dateOfPurchase: new Date().toISOString() })
  }
  clearcart() {
    const url = `${this.baseUrl}/updatemyinfo/`;

    return this.http.patch(url, {
      cart: []
      // logo,

    });
  }

  getmyorders(query = null) {
    const url = `${this.baseorderUrl}/myordersemployee${query ? `?query=${JSON.stringify(query)}` : ''}`;
    return this.http.get(url)

  }

  changeorderstatus(status, orderid, productid) {
    // console.log("CHANGE ORDER to ",status)
    const url = `${this.baseorderUrl}/changepartialorderstatus/` + orderid;
    return this.http.patch(url, {
      status,
      product: productid
      // logo,

    });
  }
  decreaseproductquantity(products) {
    const url = `${this.baseproductUrl}/decreaseproductsquantity`;
    return this.http.patch(url, {
      products

    });

  }
  decreasewalletandproductquantity(orderprice, products): Subject<any> {
    const subject = new Subject();
    this.setmywallet(orderprice).subscribe(res => {
      this.decreaseproductquantity(products).subscribe(res => {
        subject.next(res)
      });
    });
    return subject
  }
}

