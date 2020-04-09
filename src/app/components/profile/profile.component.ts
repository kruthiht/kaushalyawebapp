import { Component, OnInit } from '@angular/core';
import { ProfileinfoService } from "../../services/profileinfo.service";
import { userSignup } from "../../models/userSignupDetails";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

 id:string;
  
  constructor(private profilInfo:ProfileinfoService) { }

  ngOnInit() {
    this.id=this.profilInfo.id;
       this.add(this.id);
     console.log('User information in profile page'+this.id);
  }
 add(id:string){
  console.log('inside add method')
 }
  

}
