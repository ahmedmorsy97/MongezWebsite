import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { BsModalService } from 'ngx-bootstrap/modal';
import { UserService } from 'src/app/services/user/user.service';
import { EditusermoneyComponent } from '../editusermoney/editusermoney.component';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.scss']
})
export class ViewusersComponent implements OnInit {
  faSearch = faSearch;
  users:any =[];
  signedinuser : any
  searchusername =""
  constructor(private router: Router,private activerouter: ActivatedRoute, private UserSer: UserService,private modalService: BsModalService) {

  }
  ngOnInit(): void {
    this.getUsers();
    this.signedinuser = JSON.parse(localStorage.getItem("currentuser")).user
    console.log(this.signedinuser.employeeLevel)
  }
getUsers(search=""){
  this.signedinuser = JSON.parse(localStorage.getItem("currentuser")).user
  if(this.signedinuser.employeeLevel == 'Admin' ){
    this.UserSer.getallUsers().subscribe(
      (res:any) => {
       
        this.users = res;
  
      }
    )
  }
  else{
  this.UserSer.getUsers().subscribe(
    (res:any) => {
     
      this.users = res;

    }
  )
  }
}

search(){
  this.getUsers(this.searchusername)
}

editLimit(userid){
  const initialState = {
    title:"Edit Employee limit",
    type:"Limit",
    userid:userid
  }
  this.modalService.show(EditusermoneyComponent, {
    animated: true,
    initialState
  }).content.render.subscribe(res=>this.getUsers())

}
increaseWallet(userid){
  const initialState = {
    title:"Add to Employee Wallet",
    type:"Wallet",
    userid:userid
  }
  this.modalService.show(EditusermoneyComponent, {
    animated: true,
    initialState
  }).content.render.subscribe(res=>this.getUsers())

}
deleteUser(userid){
this.UserSer.delete(userid).subscribe(res=>{
  alert("Deleted Successfully")
  this.getUsers()
})
}
viewUser(id){
  this.router.navigateByUrl('/viewuser/'+id+"")
}
}
