import { Component, OnInit } from '@angular/core';
import { CourseDetails, video } from "../../models/courseDetails";
import { CoursesService } from "../../services/courses.service";
import { PlayVideoService } from "../../services/play-video.service";
import { Router, ActivatedRoute } from '@angular/router';

export interface videos {
  name: string;
  path:string;
}


@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})


export class MyCoursesComponent implements OnInit {
  
 // courseData:CourseDetails[]=[];
  /*video1=new video('crash course','https://www.youtube.com/watch?v=qoCh8jdicRs');
  video2=new video('another crash course','https://www.youtube.com/watch?v=qoCh8jdicRs');
  videos=[this.video1,this.video2]
  course1=new CourseDetails('web development','with html, css and bootstrap','70 hrs', this.videos);
  course2=new CourseDetails('MEAN','express, MongoDB and Angular','80 hrs', this.videos);
  course3=new CourseDetails('Phython','express, MongoDB and Angular','50 hrs', this.videos);
  
courses=[this.course1,this.course2, this.course3] */
//videos=[];
videosArray: videos[] = [];
coursesData: any = [];
id:any;

constructor(
  private courseService:CoursesService,
  public playVideo:PlayVideoService,
  private router: Router) { }

  ngOnInit(): void {
  this.savedCourses();
    
  }
savedCourses(){
  this.courseService .GetCourses().subscribe(data => {
    console.log(data)
    //this.subjectArray = data.subjects;
   // this.courseData=data;
     //console.log('course data'+this.courseData.duration);  
     //this.id=data._id;
     //console.log('course data'+ data[0].videos[0].name);
     //this.videoArray=data[0].videos
     //this.courseData=JSON.stringify(data);
     this.coursesData=data;
     this.listVideos();
     //this.videosArray=this.coursesData[0].videos;
     this.playVideo.videoList(this.videosArray);
     console.log('course data '+this.coursesData[0].duration);
     console.log('video data '+this.videosArray[1].path);
     
  
  }) 

}

listVideos(){
  for(let i=0; i<this.coursesData.length; i++){
     console.log('courseData length'+this.coursesData.length);
    for(let j=0;j<this.coursesData[i].videos.length;j++){
       //console.log('videoData'+this.coursesData[i].videos.length)
       this.videosArray.push(this.coursesData[i].videos[j])
      // console.log('videoData'+this.coursesData[i].videos[0].name)
     }
  }
}

showVideos(){
  this.router.navigateByUrl('/play-video');
}
  

}
