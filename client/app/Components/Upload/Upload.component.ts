import { Component, OnInit, NgZone } from '@angular/core';
import { IoService } from "app/Services/Io.service";
import { ContentType } from "app/Models/ContentType"
import { FileService } from "app/Services/File.service";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-Upload',
  templateUrl: './Upload.component.html',
  styleUrls: ['./Upload.component.css']
})
export class UploadComponent implements OnInit {
  loading: boolean;
  id: any;
  type: string = ContentType[ContentType.video]
  file: File;
  thumbnail: File;
  url: String = ""
  title: String;
  message: string;
  constructor(private fm: FileService, private zone: NgZone, private route: ActivatedRoute, private router: Router) {
    this.loading = false;
  }

  ngOnInit() {

    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.id = params['id'] || null;
      });
  }

  upload() {

    if (this.file) {
      this.message = null;
      var fd = new FormData();
      fd.append("title", this.title)
      fd.append("channel_id", this.id)
      fd.append("token", localStorage.getItem("id_token"))
      fd.append("file", this.file)
      fd.append("file", this.thumbnail)
      console.log(this.route)
      this.standby();
      this.fm.upload(fd).subscribe((res) => {
        console.log(res)
        this.ready()
        if (res._id != null) {
          this.router.navigate(["/profile"]);
        }
      });

    } else {
      this.message = "File is required"
    }

  }
  fileChangeEvent(e) {
    this.file = e.target.files[0];
    console.log(this.file)
  }
  imageChangeEvent(e) {
    var image = e.target.files[0];
    if (e.target.files && e.target.files[0]) {
      var reader = new FileReader();
      this.thumbnail = e.target.files[0]
      reader.onload = (event) => {
        console.log(event)
        this.url = reader.result;
      }
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  get hasUrl() {
    return this.url == ""
  }
  standby() {
    this.loading = true;
  }
  ready() {
    this.loading = false;
  }

}