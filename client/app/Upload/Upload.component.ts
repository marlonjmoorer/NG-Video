import { Component, OnInit, NgZone } from '@angular/core';
import { IoService, on } from "app/Services/Io.service";
import { ContentType } from "app/Models/ContentType";
import { FileManagementService } from "app/Services/FileManagement.service";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-Upload',
  templateUrl: './Upload.component.html',
  styleUrls: ['./Upload.component.css']
})
export class UploadComponent implements OnInit {
  id: any;
  type: string = ContentType[ContentType.video]
  file: File;
  thumbnail: File;
  url: String = ""
  message: string;
  constructor(private fm: FileManagementService, private zone: NgZone, private route: ActivatedRoute, private router: Router) {

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
      var meta = {
        name: this.file.name,
        type: this.file.type,
        size: this.file.size,
        contentType: ContentType[this.type]
      }
      console.log(this.route)
      this.fm.upload(this.file, this.id, this.thumbnail).subscribe((res) => {
        console.log(res)
        //this.router.navigateByUrl("/profile")
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

}