import { Component, OnInit } from '@angular/core';
import { UserManagementService } from "app/Services/UserManagement.service";
import { FormGroup, ReactiveFormsModule, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { AbstractForm } from "app/Models/AbstractForm"

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent extends AbstractForm implements OnInit {

  message: string
  public loginForm = this.fb.group({
    username: new FormControl("", [Validators.required, Validators.minLength(6)]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)])
  });
  constructor(private userService: UserManagementService, private fb: FormBuilder, private _router: Router) {
    super()

  }

  ngOnInit() {
  }

  login() {
    if (this.validateForm(this.loginForm)) {

      var creds = this.mapForm(this.loginForm);
      this.userService.login(creds).subscribe((res) => {
        console.log(res)
        if (res.success) {
          this._router.navigate(["/"])
        } else {
          this.message = res.message
        }
        //this._router.navigate(["/"])
      });
    }
  }

}