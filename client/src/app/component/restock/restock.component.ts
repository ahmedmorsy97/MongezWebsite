import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ProductsService } from 'src/app/services/product/products.service';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.component.html',
  styleUrls: ['./restock.component.scss']
})
export class RestockComponent implements OnInit {

  @Input() id = null;
  @Input() stocknumber: number = 0;
  @Output() sucess: EventEmitter<any> = new EventEmitter<any>();
  
  err: string = null;
  disabled: boolean = false;

  constructor(public bsModalRef: BsModalRef, private productServ: ProductsService) { }

  ngOnInit(): void {
    
  }

  restock(f: NgForm) {
    for (const control in f.controls) {
      f.controls[control].markAsDirty();
      f.controls[control].markAsTouched();
    }
    if (f.valid) {
      this.disabled = true;
      this.productServ.editproductamount(this.id, this.stocknumber).subscribe(
        (res: any) => {
          this.disabled = false;
          this.sucess.emit("Success")
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
