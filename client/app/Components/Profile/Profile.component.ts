import { Component, OnInit } from '@angular/core';
import { UserService } from "app/Services/User.service";

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.css']
})
export class ProfileComponent implements OnInit {



  constructor(um: UserService) {

  }

  ngOnInit() {
  }



}