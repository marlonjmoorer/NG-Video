import { Routes } from "@angular/router/src";

import { AuthGuard } from "app/Services/AuthGuard.service";
import { HomeComponent } from "app/Components/Home/Home.component";
import { LoginComponent } from "app/Components/Login/Login.component";
import { SignupComponent } from "app/Components/Signup/Signup.component";
import { ChannelComponent } from "app/Components/Channel/Channel.component";
import { UploadComponent } from "app/Components/Upload/Upload.component";
import { ProfileComponent } from "app/Components/Profile/Profile.component";
import { UnauthorizedComponent } from "app/Components/Shared/Unauthorized/Unauthorized.component";
import { VideoComponent } from "app/Components/Video/Video.component";

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