import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: any[] = [
    { img: "/assets/images/mechanical.jpg", label: "Mechanical" },
    { img: "/assets/images/electrical.jpg", label: "Electrical" },
    { img: "/assets/images/hardware.jpg", label: "Hardware and Tools" },
  ]
  constructor(private router:Router) { 

  }

  ngOnInit(): void {
  }
  GoToProducts(){
   this.router.navigateByUrl('/products')
  }

}
