import { Injectable } from '@angular/core';
import { UserManagementService } from "app/Services/UserManagement.service";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: UserManagementService, private router: Router) { }

    canActivate() {
        if (this.auth.logedIn) {
            return true;
        } else {
            this.router.navigateByUrl('/unauthorized');
            return false;
        }
    }
}