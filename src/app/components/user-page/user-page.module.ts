import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//imported by me
import { UserPageComponent } from "./user-page.component";
import { UserpageHeaderModule } from '../userpage-header/userpage-header.module';
import { UserpageHeaderComponent } from "../userpage-header/userpage-header.component";



@NgModule({
  declarations: [ UserPageComponent ],
  imports: [
    CommonModule,
    UserpageHeaderModule,
    UserpageHeaderComponent
  ]
})
export class UserPageModule { }
