import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl: string = `${environment.baseUrl}/product`;
  constructor(private http: HttpClient) { }

  getProducts(query: any = {}) {
    return this.http.post(this.baseUrl + "/getall", query);
  }
  getmyProducts(id:String){
    return this.http.get(this.baseUrl+'/myproducts/'+ id);
  }
  createProduct(supplier:any,productName,description,specs,priceRange,quantity,category,photoLinks,Subcategory){
    const url = `${this.baseUrl}/create`;
    console.log("supplier")
    console.log(supplier)
    return this.http.post(url, {
      supplier,
      productName,
      description,
      specs,
      priceRange,
      quantity,
      category,
      photoLinks,
      Subcategory
    });
  }
  viewProduct(id){
    return this.http.get(this.baseUrl+'/viewproduct/'+ id);
  }
}
