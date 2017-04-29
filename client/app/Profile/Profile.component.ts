import { Component, OnInit } from '@angular/core';
import { UserManagementService } from "app/Services/UserManagement.service";

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.css']
})
export class ProfileComponent implements OnInit {



  constructor(um: UserManagementService) {

  }

  ngOnInit() {
  }



}