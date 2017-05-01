import { Component, ViewChild, OnInit, NgZone } from '@angular/core';
import { NgForm } from "@angular/forms";
import 'rxjs/Rx';
import { IoService } from "app/Services/Io.service";
import { UserService } from "app/Services/User.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor(private auth: UserService) {

  }

  get logedIn() {
    return this.auth.logedIn;
  }

}
