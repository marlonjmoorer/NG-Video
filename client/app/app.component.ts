import { Component, ViewChild, OnInit, NgZone } from '@angular/core';
import { FileManagementService } from "app/Services/FileManagement.service";
import { NgForm } from "@angular/forms";
import 'rxjs/Rx';
import { IoService, emit, on } from "app/Services/Io.service";
import { UserManagementService } from "app/Services/UserManagement.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor(private auth: UserManagementService) {

  }

  get logedIn() {
    return this.auth.logedIn;
  }

}
