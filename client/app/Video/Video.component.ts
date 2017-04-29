import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-Video',
  templateUrl: './Video.component.html',
  styleUrls: ['./Video.component.css']
})
export class VideoComponent implements OnInit {

  videoId;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.videoId = params['id'] || null;
    });
    console.log(route)
  }

  ngOnInit() {
  }

}