import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.scss']
})
export class ViewuserComponent implements OnInit {
User = {};
edit = false;

  constructor(private router: Router, private UserSer: UserService) {

  }
  ngOnInit(): void {
    this.getUser("");
  }
saveInfo(){
  this.edit = !this.edit;
  console.log(this.edit);
  if(this.edit==true){

  }
  else{

  }
}
  getUser(id) {
    this.UserSer.getUser({
      ...id,
    }).subscribe(
      (res:any) => {
        console.log(res);
        this.User = res;
        console.log("USER",this.User)
      }
    )
    
  }

}
