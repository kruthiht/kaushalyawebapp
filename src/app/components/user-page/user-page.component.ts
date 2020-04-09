import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

//imported by me
import {UserpageHeaderComponent } from '../userpage-header/userpage-header.component';


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  isLoggedIn:boolean=true;
  message:string="hello from user page";
  //@Output() loginEvent= new EventEmitter<boolean>();
  //@Output() messageEvent= new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    
  }

  sendMessage(){
  //  this.loginEvent.emit(this.isLoggedIn);
    //this.messageEvent.emit(this.message);
  }

}
