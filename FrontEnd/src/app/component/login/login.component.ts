import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faWindowClose = faWindowClose;
  selected = "user"
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }
  handleselect(type){
    this.selected = type;
  }

}
