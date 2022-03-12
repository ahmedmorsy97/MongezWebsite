import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SupplierService } from 'src/app/services/supplier/supplier.service';


@Component({
  selector: 'app-viewsuppliers',
  templateUrl: './viewsuppliers.component.html',
  styleUrls: ['./viewsuppliers.component.scss']
})
export class ViewsuppliersComponent implements OnInit {
suppliers:any=[];
faSearch = faSearch;
supplierusername = "";
  constructor(private router: Router,private activerouter: ActivatedRoute, private SupplierSer: SupplierService) { }

  ngOnInit(): void {
    this.getSuppliers();
  }
getSuppliers(search=null){
  this.SupplierSer.getSuppliers(search).subscribe(
    (res:any) => {
      console.log(res);
      this.suppliers = res;
      console.log("SUPPLIERS",this.suppliers)
    }
  )
}
viewSupplier(id){
  this.router.navigateByUrl('/viewsupplier/'+id+"")
}
search(){
  this.getSuppliers(this.supplierusername);
}
}
