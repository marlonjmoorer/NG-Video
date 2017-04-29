import { Routes } from "@angular/router/src";
import { HomeComponent } from "app/Home/Home.component";
import { LoginComponent } from "app/Login/Login.component";
import { SignupComponent } from "app/Signup/Signup.component";
import { ProfileComponent } from "app/Profile/Profile.component";
import { AuthGuard } from "app/Services/AuthGuard.service";
import { UnauthorizedComponent } from "app/Shared/Unauthorized/Unauthorized.component";
import { UploadComponent } from "app/Upload/Upload.component";
import { VideoComponent } from "app/Video/Video.component";
import { ChannelComponent } from "app/Channel/Channel.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: ChannelComponent
      },
      {
        path: "upload",
        component: UploadComponent
      },

    ]

  },
  {
    path: "unauthorized",
    component: UnauthorizedComponent
  },
  {
    path: "video/:id",
    component: VideoComponent
  }
]