import { Injectable, NgZone } from '@angular/core';
import * as io from "socket.io-client";
import * as ss from "socket.io-stream"
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Subject } from "rxjs";
import { ContentType } from "app/Models/ContentType";


//var socket = socket_io.connect("/");


@Injectable()
export class IoService {


    socket: any;
    constructor() {

        this.socket = io.connect("/")
    }

    emit(evt: string, data?: any) {
        this.socket.emit(evt, data)
        this.socket.disconnect()
    }
    ss_emit(evt: string, stream: any, data?: any) {

        ss(this.socket).emit(evt, stream, data)
        this.socket.disconnect()
    }
    on(evt: string): Observable<any> {
        let observable = new Observable(observer => {

            this.socket.on(evt, (data) => {
                observer.next(data);
            });
            return () => {
                //this.socket.disconnect();
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

}