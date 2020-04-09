import { video } from "../models/courseDetails";

export class PlayVideoService{
    videos:video[]=[]
    public videoList(videos){
        this.videos=videos;
        console.log('info method'+this.videos.length);
        
    }

    public getVideoList(){
        return this.videos;
    }
}