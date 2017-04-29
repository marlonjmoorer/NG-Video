import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FileManagementService } from "app/Services/FileManagement.service";
import { IoService } from "app/Services/Io.service";
import { routes } from "app/app.routes";
import { HomeComponent } from "app/Home/Home.component";
import { LoginComponent } from './Login/Login.component';
import { UserManagementService } from "app/Services/UserManagement.service";
import { SignupComponent } from './Signup/Signup.component';
import { RecentVideosComponent } from './RecentVideos/RecentVideos.component';
import { PodcastListComponent } from './PodcastList/PodcastList.component';
import { ProfileComponent } from './Profile/Profile.component';
import { UnauthorizedComponent } from "app/Shared/Unauthorized/Unauthorized.component";
import { AuthGuard } from "app/Services/AuthGuard.service";
import { UploadComponent } from './Upload/Upload.component';
import { VideoComponent } from './Video/Video.component';
import { ChannelComponent } from './Channel/Channel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    RecentVideosComponent,
    PodcastListComponent,
    ProfileComponent,
    UnauthorizedComponent,
    UploadComponent,
    VideoComponent,
    ChannelComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FileManagementService, UserManagementService, FormBuilder, IoService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
