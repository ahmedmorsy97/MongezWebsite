import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = `${environment.baseUrl}/user`;

  constructor(private http: HttpClient) { }
  
  getUser(id: any = {}) {
    return this.http.get(this.baseUrl+'/viewuser/'+'61648a84ed391a2580d89a87');
  }
}
