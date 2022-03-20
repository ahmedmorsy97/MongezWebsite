import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'ngx-bootstrap-multiselect';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CompanyService } from 'src/app/services/company/company.service';
import { UserService } from 'src/app/services/user/user.service';
import { EditusermoneyComponent } from '../editusermoney/editusermoney.component';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.scss']
})
export class ViewusersComponent implements OnInit {
  faSearch = faSearch;
  users: any = [];
  signedinuser: any;
  searchusername = "";
  
  roles: IMultiSelectOption[] = [
    {
      id: "Admin",
      name: "Admin"
    },
    {
      id: "CompanyAdmin",
      name: "Company Admin"
    },
    {
      id: "Manager",
      name: "Manager"
    },
    {
      id: "Employee",
      name: "Employee"
    }
  ];
  companies: IMultiSelectOption[];

  selectedCompanies: any = null;
  selectedRoles: any = null;

  constructor(
    private router: Router, 
    private UserSer: UserService, 
    private CompanySer: CompanyService, 
    private modalService: BsModalService,
    private activerouter: ActivatedRoute, 
  ) {
  }

  // Settings configuration
  mySettings: IMultiSelectSettings = {
    enableSearch: true,
    showCheckAll: true,
    showUncheckAll: true,
    maintainSelectionOrderInTitle: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-primary',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true
  };

  // Text configuration
  myTexts: IMultiSelectTexts = {
    checkAll: 'Select all',
    uncheckAll: 'Unselect all',
    checked: 'item selected',
    checkedPlural: 'items selected',
    searchPlaceholder: 'Find',
    searchEmptyResult: 'Nothing found...',
    searchNoRenderText: 'Type in search box to see results...',
    defaultTitle: 'Select Company/ies',
    allSelected: 'All sected',
  };

  
  // Settings configuration
  mySettingsRoles: IMultiSelectSettings = {
    enableSearch: true,
    showCheckAll: true,
    showUncheckAll: true,
    maintainSelectionOrderInTitle: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-primary',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true
  };

  // Text configuration
  myTextsRoles: IMultiSelectTexts = {
    checkAll: 'Select all',
    uncheckAll: 'Unselect all',
    checked: 'item selected',
    checkedPlural: 'items selected',
    searchPlaceholder: 'Find',
    searchEmptyResult: 'Nothing found...',
    searchNoRenderText: 'Type in search box to see results...',
    defaultTitle: 'Select Role/s',
    allSelected: 'All sected',
  };


  ngOnInit(): void {
    this.getUsers();
    this.getCompanies();
    this.signedinuser = JSON.parse(localStorage.getItem("currentuser")).user;
    // console.log(this.signedinuser.employeeLevel)
  }

  getCompanies() {
    this.CompanySer.getCompanies(null).subscribe(
      (res: any) => {
        this.companies = res?.map?.(el => ({
          id: el._id,
          name: `${el.name}`
        }))
      }
    )
  }

  onChangeCompanies(e) {}

  applyFilter(e) {
    const query = {
      employeeLevel: {
        $in: this.selectedRoles?.map(role => role) || null,
      },
      $or: this.selectedCompanies?.map(company => ({ company })) || null,
    }
    if(!query.employeeLevel?.$in || query.employeeLevel?.$in?.length == 0) delete query.employeeLevel;
    if(!this.selectedCompanies || this.selectedCompanies?.length == 0) delete query.$or;
    this.getUsers(this.searchusername, query || null);
  }

  getUsers(search = null, query = null) {
    this.signedinuser = JSON.parse(localStorage.getItem("currentuser")).user;
    
    if (this.signedinuser?.employeeLevel == 'Admin') {
      this.UserSer.getallUsers(search, query).subscribe(
        (res: any) => {
          this.users = res;
        }
      )
    }
    else {
      this.UserSer.getUsers(search).subscribe(
        (res: any) => {
          this.users = res;
        }
      )
    }
  }

  search() {
    this.getUsers(this.searchusername)
  }

  editLimit(userid) {
    const initialState = {
      title: "Edit Employee limit",
      type: "Limit",
      userid: userid
    }
    this.modalService.show(EditusermoneyComponent, {
      animated: true,
      initialState
    }).content.render.subscribe(res => this.getUsers())

  }
  increaseWallet(userid) {
    const initialState = {
      title: "Add to Employee Wallet",
      type: "Wallet",
      userid: userid
    }
    this.modalService.show(EditusermoneyComponent, {
      animated: true,
      initialState
    }).content.render.subscribe(res => this.getUsers())

  }
  deleteUser(userid) {
    this.UserSer.delete(userid).subscribe(res => {
      alert("Deleted Successfully")
      this.getUsers()
    })
  }
  viewUser(id) {
    this.router.navigateByUrl('/viewuser/' + id + "")
  }
}
