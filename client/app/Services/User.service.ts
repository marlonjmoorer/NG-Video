import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { tokenNotExpired } from 'angular2-jwt';
@Injectable()
export class UserService {

    constructor(private http: Http) { }


    login(body) {
        return this.http.post("api/user/login", body).map((res) => {
            let data = res.json();
            if (data.token) {
                localStorage.setItem('id_token', data.token);
            }
            return data
        })

    }

    signup(body) {
        return this.http.post("/api/user/signup", body).map((res) => {
            return res.json()
        })
    }
    get logedIn() {
        return tokenNotExpired("id_token")
    }
    logout() {
        localStorage.removeItem('id_token');
    }

    getChannel() {
        var token = localStorage.getItem("id_token");
        return this.http.post("/api/channel/getChannel", { token }).map((res) => {
            return res.json()
        })
    }
}