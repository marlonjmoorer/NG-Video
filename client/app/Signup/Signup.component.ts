import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from "@angular/forms";
import { AbstractForm } from "app/Models/AbstractForm";
import { UserManagementService } from "app/Services/UserManagement.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-Signup',
  templateUrl: './Signup.component.html',
  styleUrls: ['./Signup.component.css']
})
export class SignupComponent extends AbstractForm implements OnInit {
  message: string;

  public signupForm = this.fb.group({
    username: new FormControl("", [Validators.required, Validators.minLength(6)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)])
  });
  constructor(private userService: UserManagementService, private router: Router, private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
  }

  signup() {
    if (this.validateForm(this.signupForm)) {
      var newUser = this.mapForm(this.signupForm)

      //console.log(newUser)
      this.userService.signup(newUser).subscribe((res) => {
        if (res.success) { this.router.navigate(["/login"]) }
        this.message = res.message
      })
    }
  }

}