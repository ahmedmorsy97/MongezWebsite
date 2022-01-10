import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.scss']
})
export class ViewusersComponent implements OnInit {
  faSearch = faSearch;
  users:any =[];
  constructor(private router: Router,private activerouter: ActivatedRoute, private UserSer: UserService) {

  }
  ngOnInit(): void {
    this.getUsers();
  }
getUsers(){
  this.UserSer.getUsers().subscribe(
    (res:any) => {
      console.log(res);
      this.users = res;
      console.log("USERS",this.users)
    }
  )


}
viewUser(){

}
}
