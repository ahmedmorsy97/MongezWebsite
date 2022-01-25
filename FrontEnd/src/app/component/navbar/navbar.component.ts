import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch, faCartPlus, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { LoginComponent } from '../login/login.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgSimpleSidebarService, SimpleSidebarPosition, SimpleSidebarItem } from 'ng-simple-sidebar';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faSearch = faSearch;
  faCartPlus = faCartPlus;
  faUser = faUser;
  faBars = faBars;
  modalRef?: BsModalRef;
  user = null;

  type = "";
  sidebarItems: SimpleSidebarItem[];
  adminsidebarItems: SimpleSidebarItem[];
  companyadminsidebarItems: SimpleSidebarItem[];
  managersidebarItems: SimpleSidebarItem[];
  suppliersidebarItems: SimpleSidebarItem[];

  isOpen$: BehaviorSubject<Boolean>;
  sidebarOpened: Boolean = false;

  constructor(
    private router: Router,
    private modalService: BsModalService,
    private authServ: AuthService,
    private ngSimpleSidebarService: NgSimpleSidebarService
  ) {
  }
  ngOnInit(): void {
    this.user = this.authServ.checkUser();
    this.type = localStorage.getItem("type")
    this.authServ.authState.subscribe(
      state => {
        this.user = this.authServ.checkUser();
      }
    )
   
    // init side nav when logged in
    this.initSideNav();
  }

  initSideNav() {
    if(this.type=="user"){
    this.sidebarItems = [
      {
        name: 'Welcome',
        icon: 'las la-home',
        routerLink: [''],
        position: SimpleSidebarPosition.top
      },
      
      {
        name: 'About',
        icon: 'las la-address-book',
        routerLink: ['/about'],
        position: SimpleSidebarPosition.top
      },
      {
        name: 'View My Wallet',
        icon: 'las la-wallet',
        routerLink: ['/viewmywallet'],
        position: SimpleSidebarPosition.top
      },
      {
        name: 'View My Orders',
        icon: 'las la-shopping-bag',
        routerLink: ['/viewmyorders'],
        position: SimpleSidebarPosition.top
      },
      {
        name: 'View Users',
        icon: 'las la-users',
        routerLink: ['/viewusers'],
        position: SimpleSidebarPosition.top
      },
      {
        name: 'View Suppliers',
        icon: 'las la-users',
        routerLink: ['/viewsuppliers'],
        position: SimpleSidebarPosition.top
      },
      {
        name: 'View Companies',
        icon: 'las la-building',
        routerLink: ['/viewcompanies'],
        position: SimpleSidebarPosition.top
      },
      {
        name: 'Create User',
        icon: 'las la-plus-circle',
        routerLink: ['/createuser'],
        position: SimpleSidebarPosition.top
      },
      {
        name: 'Create Supplier',
        icon: 'las la-plus-circle',
        routerLink: ['/createsupplier'],
        position: SimpleSidebarPosition.top
      },
      {
        name: 'Create Company',
        icon: 'las la-plus-circle',
        routerLink: ['/createcompany'],
        position: SimpleSidebarPosition.top
      },

      {
        name: 'Logout',
        icon: 'las la-external-link-alt',
        // url: 'https://secanis.ch',
        // target: '_blank',
        routerLink: ['/logout'],
        position: SimpleSidebarPosition.bottom
      }
    ];
  }
  else{
    const userdata = JSON.parse(this.user);
    this.sidebarItems = [
      {
        name: 'Welcome',
        icon: 'las la-home',
        routerLink: [''],
        position: SimpleSidebarPosition.top
      },
      
      {
        name: 'About',
        icon: 'las la-address-book',
        routerLink: ['/about'],
        position: SimpleSidebarPosition.top
      },
 
      {
        name: 'View Users',
        icon: 'las la-users',
        routerLink: ['/viewusers'],
        position: SimpleSidebarPosition.top
      },
      {
        name: 'View Suppliers',
        icon: 'las la-users',
        routerLink: ['/viewsuppliers'],
        position: SimpleSidebarPosition.top
      },
      {
        name: 'View Companies',
        icon: 'las la-building',
        routerLink: ['/viewcompanies'],
        position: SimpleSidebarPosition.top
      },
      
      {
        name: 'Create Product',
        icon: 'las la-plus-circle',
        routerLink: ['/createproduct/'+userdata.supplier._id],
        position: SimpleSidebarPosition.top
      },
      {
        name: 'View my Products',
        icon: 'las la-shopping-bag',
        routerLink: ['/viewmyproducts/'+userdata.supplier._id],
        position: SimpleSidebarPosition.top
      },
      {
        name: 'Logout',
        icon: 'las la-external-link-alt',
        // url: 'https://secanis.ch',
        // target: '_blank',
        routerLink: ['/logout'],
        position: SimpleSidebarPosition.bottom
      }
    ];
  }
    // required, configure items
   
  
    this.ngSimpleSidebarService.addItems(this.sidebarItems);
    

    // required, configure icons
    this.ngSimpleSidebarService.configure({
      openIcon: 'las la-bars',
      closeIcon: 'las la-times',
      colors: {
        darkMode: false,
        background: "#f8f9fa",
        font: "#F56A00",
        // darkModeBackground: "#333",
        // darkModeFont: "#fff"
      },
      closeAfterClick: true,
      mobile: false,
      // position: "sticky",
      // mobileTitle: "I am a mobile title"
    });

    
    // optional, access states
    // sidebarConfig$ = this.ngSimpleSidebarService.getConfiguration();
	  this.isOpen$ = this.ngSimpleSidebarService.isOpen();
    // getTopsideItems$ = this.ngSimpleSidebarService.getTopsideItems();
    // getBotsideItems$ = this.ngSimpleSidebarService.getBotsideItems();

    this.isOpen$.subscribe(
      res => {
        // console.log(res);
        this.sidebarOpened = res;
      }
    )
  }

  openSideNav() {
    this.ngSimpleSidebarService.open();
  }

  closeSideNav() {
    this.ngSimpleSidebarService.close();
  }

  toggleSideNav() {
    if(this.sidebarOpened) {
      this.closeSideNav();
    } else {
      this.openSideNav();
    }
  }

  GoToProducts() {
    this.router.navigateByUrl('/products')
  }
  ViewProfile() {
    console.log(this.user);
    const userdata = JSON.parse(this.user);
    console.log(userdata);
    this.type = localStorage.getItem("type")
    if (this.type == "user")
      this.router.navigateByUrl('/viewuser/' + userdata.user._id);
    if (this.type == "supplier")
      this.router.navigateByUrl('/viewsupplier/' + userdata.supplier._id);
  }
  GoToHome() {
    this.router.navigateByUrl('/')
  }
  viewCart(){
    if (this.type == "user"){
    const userdata = JSON.parse(this.user);
    this.router.navigateByUrl('/cart/'+userdata.user._id) 
    }
  }
  Login() {
    const initialState = {
    }
    this.modalService.show(LoginComponent, {
      animated: true,
      initialState
    })
  }
}
