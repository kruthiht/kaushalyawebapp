import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// imported by me
import { UserpageHeaderComponent } from "./userpage-header.component";



@NgModule({
  declarations: [UserpageHeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[UserpageHeaderComponent]
})
export class UserpageHeaderModule { }
