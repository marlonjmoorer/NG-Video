import { Component, OnInit } from '@angular/core';
import { UserManagementService } from "app/Services/UserManagement.service";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-Channel',
  templateUrl: './Channel.component.html',
  styleUrls: ['./Channel.component.css']
})
export class ChannelComponent implements OnInit {
  podcast = [];
  videos = [];
  channel: any = {}

  constructor(um: UserManagementService, private san: DomSanitizer) {

    um.getChannel().subscribe((c) => {
      console.log(c)
      this.channel = c
      this.videos = c.videos;
      this.podcast = c.podcast;

    })

  }

  ngOnInit() {
  }

  get hasVideos() {
    return this.videos.length > 0;
  }
  LoadImgage(array) {

    var blob = new Blob([array], { 'type': 'image/png' });
    var url = URL.createObjectURL(blob); //
    return this.san.bypassSecurityTrustResourceUrl(url)
  }

}