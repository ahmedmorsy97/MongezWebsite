import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-editusermoney',
  templateUrl: './editusermoney.component.html',
  styleUrls: ['./editusermoney.component.scss']
})
export class EditusermoneyComponent implements OnInit {
@Input() title:String="Edit User Money"
@Input() type:String="Wallet"
@Input() userid:String=null
@Output() render:EventEmitter<String>=new EventEmitter<String>()
amount:Number=0
disabled:boolean= false
  constructor(public bsModalRef: BsModalRef,private UserSer:UserService) { }

  ngOnInit(): void {

  }
  submit(f: NgForm){
    for (const control in f.controls) {
      f.controls[control].markAsDirty();
      f.controls[control].markAsTouched();
    }
    if(f.valid) {
      this.disabled = true;
      if(this.type=="Wallet"){
        this.UserSer.increasewallet(this.userid,this.amount).subscribe((res:any)=>{
          this.bsModalRef.hide();
          this.render.emit("")
          alert("Amount added successfully. New wallet amount is "+res.updateduser.wallet)
        })
      }
      else if(this.type=="Limit"){
        this.UserSer.editLimit(this.userid,this.amount).subscribe((res:any)=>{
          this.bsModalRef.hide();
          this.render.emit("")
          alert("Limit edited successfully. New limit is "+res.updateduser.limit)
        })
    }

  
  }

}
}
