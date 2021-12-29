import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch, faCartPlus ,faUser} from '@fortawesome/free-solid-svg-icons';
import { LoginComponent } from '../login/login.component';
import { BsModalRef,BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faSearch = faSearch;
  faCartPlus = faCartPlus;
  faUser = faUser;
  modalRef?: BsModalRef;
  user = null;
  type = "";
  constructor(private router:Router,private modalService: BsModalService, private authServ: AuthService) { 
   

  }
  ngOnInit(): void {
    this.user = this.authServ.checkUser();
    this.type = localStorage.getItem("type")
    this.authServ.authState.subscribe(
      state =>{
        this.user = this.authServ.checkUser();
      }
    )
  }
  GoToProducts(){
    this.router.navigateByUrl('/products')
   }
   ViewProfile(){
     console.log(this.user);
     const userdata = JSON.parse(this.user);
     console.log(userdata);
    this.type = localStorage.getItem("type")
    if(this.type=="user")
    this.router.navigateByUrl('/viewuser/'+ userdata.user._id);
    if(this.type=="supplier")
    this.router.navigateByUrl('/viewsupplier/'+ userdata.supplier._id);
   }
   GoToHome(){
    this.router.navigateByUrl('/')
   }
   Login(){
    const initialState = {
    }
    this.modalService.show(LoginComponent, {
      animated: true,
      initialState
    })
   }
}
