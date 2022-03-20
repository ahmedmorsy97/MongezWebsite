import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-createmanager',
  templateUrl: './createmanager.component.html',
  styleUrls: ['./createmanager.component.scss']
})
export class CreatemanagerComponent implements OnInit {

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
    this.UserServ.createManager(this.firstname,this.lastname,this.username,this.email,this.password,this.mobileNumber,this.dateOfBirth,this.nationalID,"Manager",this.image).subscribe(
      (res: any) => {
      // console.log(res)
      this.router.navigateByUrl('')
      }, err => {
        this.err = err?.error?.err || "Something went wrong";
      }
    )
  
  }
}
