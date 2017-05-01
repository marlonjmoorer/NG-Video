import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { UserService } from "app/Services/User.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: UserService, private router: Router) { }

    canActivate() {
        if (this.auth.logedIn) {
            return true;
        } else {
            this.router.navigateByUrl('/unauthorized');
            return false;
        }
    }
}