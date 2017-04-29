import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { NgForm } from "@angular/forms";
import { io, on, ss, emit, ss_emit, } from "app/Services/Io.service";


@Injectable()
export class FileManagementService {

    constructor(private http: Http) { }


    upload(file: File, channel_id: String, thumbnail: File) {
        var fd = new FormData();
        fd.append("file", file)
        fd.append("channel_id", channel_id)
        fd.append("file", thumbnail)
        return this.http.post("api/file/upload", fd).map((res) => {
            return res.json();
        })

    }
    upold(fileToUpload: any, meta) {
        meta.token = localStorage.getItem("id_token")
        var stream = ss.createStream();
        ss_emit('upload', stream, meta);
        on("attached").subscribe(() => {
            console.log("attached")
            ss.createBlobReadStream(fileToUpload).pipe(stream);
        })
        return on("finish")
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



}