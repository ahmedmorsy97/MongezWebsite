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

}
