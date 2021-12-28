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

  constructor(private router:Router,private modalService: BsModalService, private authServ: AuthService) { 
   

  }
  ngOnInit(): void {
    this.user = this.authServ.checkUser();
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
    this.router.navigateByUrl('/viewuser/'+ userdata.user._id);
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
