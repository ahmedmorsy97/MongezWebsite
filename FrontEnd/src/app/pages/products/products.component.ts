import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  categories: any[] = [
    { img: "/assets/images/HVAC.png", label: "HVAC" },
    { img: "/assets/images/plumbing.jpg", label: "Plumbing" },
    { img: "/assets/images/HVAC.png", label: "Dry Wall" },
    { img: "/assets/images/HVAC.png", label: "Insulation" },
    { img: "/assets/images/hardware.jpg", label: "HardWare" },
    { img: "/assets/images/HVAC.png", label: "Paint" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
