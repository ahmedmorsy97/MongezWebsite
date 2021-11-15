import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories: any[] = [
    { img: "/assets/images/HVAC.png", label: "HVAC" },
    { img: "/assets/images/plumbing.jpg", label: "Plumbing" },
    { img: "/assets/images/HVAC.png", label: "Dry Wall" },
    { img: "/assets/images/HVAC.png", label: "Insulation" },
    { img: "/assets/images/hardware.jpg", label: "HardWare" },
    { img: "/assets/images/HVAC.png", label: "Paint" }
  ]
  constructor(private router:Router) { 

  }

  ngOnInit(): void {
  }
  GoToProducts(){
   this.router.navigateByUrl('/products')
  }

}
