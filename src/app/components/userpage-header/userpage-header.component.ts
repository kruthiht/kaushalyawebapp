import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userpage-header',
  templateUrl: './userpage-header.component.html',
  styleUrls: ['./userpage-header.component.css']
})
export class UserpageHeaderComponent implements OnInit {

  constructor() { 
 console.log("inside userpage constructor")

  }


  ngOnInit(): void {
    console.log("inside userpage ngInInit")
  }


  navbarOpen = false;
 
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
