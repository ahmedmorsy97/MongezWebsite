import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = `${environment.baseUrl}/user`;

  constructor(private http: HttpClient) { }
  
  getUser(id:string) {
    return this.http.get(this.baseUrl+'/viewuser/'+ id);
  }
}
