import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-createadmin',
  templateUrl: './createadmin.component.html',
  styleUrls: ['./createadmin.component.scss']
})
export class CreateadminComponent implements OnInit {

  firstname="";
  lastname="";
  username="";
  email="";
  password="";
  mobileNumber="";
  dateOfBirth="";
  nationalID="";
  employeeLevel="";
  image="";
  err: string = null;
    constructor( private UserServ: UserService,private router:Router) { }
  
    ngOnInit(): void {
    }
  createUser(){
    this.UserServ.createAdmin(this.firstname,this.lastname,this.username,this.email,this.password,this.mobileNumber,this.dateOfBirth,this.nationalID,"Admin",this.image).subscribe(
      (res: any) => {
      // console.log(res)
      this.router.navigateByUrl('')
      }, err => {
        this.err = err?.error?.err || "Something went wrong";
      }
    )
  
  }
}
