import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faSearch = faSearch;
  faCartPlus = faCartPlus;
  
  constructor(private router:Router) { 

  }
  ngOnInit(): void {
  }
  GoToProducts(){
    this.router.navigateByUrl('/products')
   }
}
