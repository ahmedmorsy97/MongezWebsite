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

  constructor(private router: Router, private UserSer: UserService) {

  }
  ngOnInit(): void {
    this.getUser("");
  }

  getUser(id) {
    this.UserSer.getUser({
      ...id,
    }).subscribe(
      (res:any) => {
        console.log(res);
        this.User = res.User;
      }
    )
  }

}
