import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/services/supplier/supplier.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewsupplier',
  templateUrl: './viewsupplier.component.html',
  styleUrls: ['./viewsupplier.component.scss']
})
export class ViewsupplierComponent implements OnInit {
Supplier = {};
  constructor(private router: Router, private SupplierSer: SupplierService) { }

  ngOnInit(): void {
  }
  getSupplier(id) {
    this.SupplierSer.getSupplier({
      ...id,
    }).subscribe(
      (res:any) => {
        console.log(res);
        this.Supplier = res.User;
      }
    )
  }
}
