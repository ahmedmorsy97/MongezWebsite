import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  categories: any[] = [
    { img: "/assets/images/mechanical.jpg", label: "Mechanical" },
    { img: "/assets/images/electrical.jpg", label: "Electrical" },
    { img: "/assets/images/hardware.jpg", label: "Hardware and Tools" },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
