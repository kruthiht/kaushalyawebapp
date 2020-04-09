import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserpageHeaderComponent } from './components/userpage-header/userpage-header.component';
//imported by me
import { FormsModule,FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { SignupService } from "./services/signup.service";
import { UserhomeComponent } from './components/userhome/userhome.component';
import { ProfileinfoService } from './services/profileinfo.service';
import { ProfileComponent } from './components/profile/profile.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { CoursesService } from "./services/courses.service";
import { PlayVideosComponent } from './components/my-courses/play-videos/play-videos.component';
import {PlayVideoService } from "./services/play-video.service";




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    LoginComponent,
    SignupComponent,
    UserpageHeaderComponent,
    UserhomeComponent,
    ProfileComponent,
    MyCoursesComponent,
    PlayVideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SignupService, ProfileinfoService,CoursesService,PlayVideoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
