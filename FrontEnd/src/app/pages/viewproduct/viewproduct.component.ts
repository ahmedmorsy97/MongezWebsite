import { Component, OnInit } from '@angular/core';
import { faPlus,faMinus} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.scss']
})
export class ViewproductComponent implements OnInit {
faPlus = faPlus;
faMinus = faMinus;
  constructor() { }

  ngOnInit(): void {
  }

}
