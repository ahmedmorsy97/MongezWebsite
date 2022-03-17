import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss']
})
export class CreateuserComponent implements OnInit {
  firstname = "";
  lastname = "";
  username = "";
  email = "";
  password = "";
  mobileNumber = "";
  dateOfBirth = "";
  nationalID = "";
  employeeLevel = "";
  limit = 0;
  wallet = 0;
  image = "";
  err: string = null;
  constructor(private UserServ: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  createUser() {
    this.UserServ.createUser(this.firstname, this.lastname, this.username, this.email, this.password, this.mobileNumber, this.dateOfBirth, this.nationalID, "Employee", this.limit, this.wallet, this.image).subscribe(
      (res: any) => {
        // console.log(res)
        this.router.navigateByUrl('')
      }, err => {
        this.err = err?.error?.err || "Something went wrong";
      }
    )

  }
}
