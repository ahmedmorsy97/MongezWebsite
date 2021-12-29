import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { faWindowClose} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faWindowClose = faWindowClose;
  selected = "user";
  err: string = null;
  disabled: boolean = false;
  email: string = null;
  password: string = null;


  constructor(public bsModalRef: BsModalRef, private authSer: AuthService) { }

  ngOnInit(): void {
  }

  handleselect(type){
    this.selected = type;
  }

  login(f: NgForm) {
    for (const control in f.controls) {
      f.controls[control].markAsDirty();
      f.controls[control].markAsTouched();
    }
    if(f.valid) {
      this.disabled = true;
      this.authSer.login(this.email, this.password ,this.selected).subscribe(
        (res: any) => {
          localStorage.setItem("type", this.selected)
          this.disabled = false;
          this.authSer.setToken(res)
          this.authSer.authState.emit("Login")
          this.bsModalRef.hide();
        }, err => {
          this.disabled = false;
          console.log(err);
          this.err = err?.error?.err || "Something went wrong";
        }
      )
    }
  }

}
