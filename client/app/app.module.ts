import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IoService } from "app/Services/Io.service";
import { routes } from "app/app.routes";
import { LoginComponent } from "app/Components/Login/Login.component";
import { SignupComponent } from "app/Components/Signup/Signup.component";
import { HomeComponent } from "app/Components/Home/Home.component";
import { RecentVideosComponent } from "app/Components/RecentVideos/RecentVideos.component";
import { PodcastListComponent } from "app/Components/PodcastList/PodcastList.component";
import { ProfileComponent } from "app/Components/Profile/Profile.component";
import { AuthGuard } from "app/Services/AuthGuard.service";
import { UnauthorizedComponent } from "app/Components/Shared/Unauthorized/Unauthorized.component";
import { UploadComponent } from "app/Components/Upload/Upload.component";
import { VideoComponent } from "app/Components/Video/Video.component";
import { LoadingComponent } from "app/Components/Shared/Loading/Loading.component";
import { ChannelComponent } from "app/Components/Channel/Channel.component";
import { FileService } from "app/Services/File.service";
import { UserService } from "app/Services/User.service";


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
    ChannelComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    FileService,
    UserService,
    FormBuilder,
    IoService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
