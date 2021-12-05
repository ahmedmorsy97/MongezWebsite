import { Component, OnInit } from '@angular/core';
import { faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.scss']
})
export class ViewordersComponent implements OnInit {
  faSearch = faSearch;
  constructor() { }

  ngOnInit(): void {
  }
  ViewOrder(){

  }
}
