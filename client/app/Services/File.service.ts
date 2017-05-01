import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { NgForm } from "@angular/forms";



@Injectable()
export class FileService {

    constructor(private http: Http) { }


    upload(fd: FormData) {
        let body = { toke: localStorage.getItem("id_token") }
        return this.http.post("api/file/upload", fd).map((res) => {
            return res.json();
        })
    }

    getRecentVideos() {
        return this.http.get("/api/file/videos/recent").map(res => {
            return res.json()
        })
    }

    download(id) {
        //let params = new URLSearchParams();
        //params.set('id', id);
        return this.http.get(`/api/download/${id}`)
            .map((res) => {
                console.log(res)
                return res.json()
            })
    }
    deleteVideo(id) {
        var body = {
            id: id,
            token: localStorage.getItem("id_token")
        }
        return this.http.delete("/api/file/video/", { body: body }).map((res) => {
            return res.json()
        })
    }



}