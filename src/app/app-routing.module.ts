import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//imported by me
import { HomeComponent } from "./components/home/home.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { UserPageComponent } from "./components/user-page/user-page.component";
import { UserhomeComponent } from "./components/userhome/userhome.component";
import { ProfileComponent } from './components/profile/profile.component';
import { MyCoursesComponent } from "./components/my-courses/my-courses.component";
import { PlayVideosComponent } from "./components/my-courses/play-videos/play-videos.component";


const routes: Routes = [
 // {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: HomeComponent},
  {path: "about-us", component: AboutUsComponent },
  {path: "login", component: LoginComponent },
  {path: "signup", component: SignupComponent},
  {path: "user-page", component: UserPageComponent}, 
  {path: "userhome", component: UserhomeComponent},
  {path: "profile", component:ProfileComponent},  
  {path: "my-courses", component:MyCoursesComponent}, 
  {path: "play-video", component:PlayVideosComponent}       
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
