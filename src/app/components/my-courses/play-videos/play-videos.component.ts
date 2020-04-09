import { Component, OnInit } from '@angular/core';


//imported by me
import { PlayVideoService } from "../../../services/play-video.service";
import { video } from "../../../models/courseDetails";

@Component({
  selector: 'app-play-videos',
  templateUrl: './play-videos.component.html',
  styleUrls: ['./play-videos.component.css']
})
export class PlayVideosComponent implements OnInit {
  hideVideoDiv:boolean=true;
   videos:video[]=[];
   currentVideo:video;
   videop="https://www.youtube.com/watch?v=zZ1dYanZIJ4";
  constructor(private playVideo:PlayVideoService) { }

  ngOnInit(): void {
    this.videos=this.playVideo.getVideoList();
    console.log('inside play video component.ts'+this.videos[0].videopath);
  }

  displayVideo(Video){
    this.hideVideoDiv=false;
    // this.currentVideo=Video;
  }

  hideVideo(){
    this.hideVideoDiv=true;
    // this.currentVideo=Video;
  }
}
