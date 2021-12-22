import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  baseUrl: string = `${environment.baseUrl}/user`;

  constructor(private http: HttpClient) { }

  getSupplier(id: any = {}) {
    return this.http.get(this.baseUrl+'/viewsupplier/'+'id');
  }
}
