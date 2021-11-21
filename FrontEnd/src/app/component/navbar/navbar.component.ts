import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { LoginComponent } from '../login/login.component';
import { BsModalRef,BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faSearch = faSearch;
  faCartPlus = faCartPlus;
  modalRef?: BsModalRef;
  constructor(private router:Router,private modalService: BsModalService
    ) { 
   

  }
  ngOnInit(): void {
  }
  GoToProducts(){
    this.router.navigateByUrl('/products')
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
