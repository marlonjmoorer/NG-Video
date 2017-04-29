import { Component, OnInit } from '@angular/core';
import { FileManagementService } from "app/Services/FileManagement.service";

@Component({
  selector: 'app-RecentVideos',
  templateUrl: './RecentVideos.component.html',
  styleUrls: ['./RecentVideos.component.css']
})
export class RecentVideosComponent implements OnInit {

  recentVideos = []
  constructor(private fm: FileManagementService) {

  }

  ngOnInit() {
    this.fm.getRecentVideos().subscribe((res) => {
      console.log(res)
      this.recentVideos = res;
    })
  }

}