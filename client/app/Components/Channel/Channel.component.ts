import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from "app/Services/User.service";
import { FileService } from "app/Services/File.service";

@Component({
  selector: 'app-Channel',
  templateUrl: './Channel.component.html',
  styleUrls: ['./Channel.component.css']
})
export class ChannelComponent implements OnInit {
  podcast = [];
  videos = [];
  channel: any = {}

  constructor(private um: UserService, private fm: FileService, private san: DomSanitizer) {
    this.getChannel()
  }

  ngOnInit() {
    if (this.channel == null) {

    }
  }

  get hasVideos() {
    return this.videos.length > 0;
  }
  deleteVideo(id) {
    this.fm.deleteVideo(id).subscribe((res) => {
      console.log(res)
      if (res.success) {
        this.getChannel()
      }
    })
  }
  getChannel() {
    this.um.getChannel().subscribe((c) => {
      console.log(c)
      this.channel = c
      this.videos = c.videos;
      this.podcast = c.podcast;
    })
  }

}