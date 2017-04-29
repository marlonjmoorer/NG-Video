import { Injectable, NgZone } from '@angular/core';
import * as socket_io from "socket.io-client";
import * as socket_ss from "socket.io-stream"
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Subject } from "rxjs";
import { ContentType } from "app/Models/ContentType";


var socket = socket_io.connect("/");
var zone = new NgZone(true);
export var io = socket_io;
export var ss = socket_ss;
export function on(evt: string): Observable<any> {
    let observable = new Observable(observer => {

        socket.on(evt, (data) => {
            observer.next(data);
        });
        return () => {
            // this.socket.disconnect();
        };
    })
    return observable;

    //let subj = new Subject;
    //use ngZone?
    // socket.on(evt, (data) => {
    //   subj.next(data);

    // });
    //return subj;
}
export function emit(evt: string, data?: any) {
    socket.emit(evt, data)
}
export function ss_emit(evt: string, stream: any, data?: any) {
    ss(socket).emit(evt, stream, data)
}
@Injectable()
export class IoService {


    constructor(private http: Http) {
        // this.socket= io.connect("/")
    }

    uploadFile(file: File, contentType: ContentType) {
        var meta = {
            name: file.name,
            size: file.size,
            type: file.type,
            contentType: contentType
        }
        var fr = new FileReader();
        var uint8ArrayNew = null;
        var arrayBufferNew = null;
        //fr.onload = function (progressEvent) {
        //arrayBufferNew = this.result;
        //uint8ArrayNew = new Uint8Array(arrayBufferNew);
        //console.log(uint8ArrayNew);
        //}
        //fr.readAsArrayBuffer(file);
        //arrayBufferNew = fr.result;
        uint8ArrayNew = new Uint8Array(arrayBufferNew);
        console.log(uint8ArrayNew);
        return this.http.get("/api/fm/getFiles", uint8ArrayNew).map((data) => {
            return data
        })
        //  var stream = ss.createStream();
        // ss(socket).emit('upload', stream, meta);
        //ss.createBlobReadStream(file).pipe(stream);
        // return null;
    }
    listFiles() {
        console.log("files")
        return this.http.get("/api/getFiles")
            .map((res) => res.json())


    }
}