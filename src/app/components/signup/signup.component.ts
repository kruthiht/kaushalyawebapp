import { Component, OnInit, ViewChild, NgZone } from '@angular/core';


//imported by me
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm, FormControl } from '@angular/forms'; 
import { userSignup } from "../../models/userSignupDetails";
import { SignupService } from "../../services/signup.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'] 
})
export class SignupComponent implements OnInit {

  user= new userSignup();
    registrationForm = new FormGroup({
      name: new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      mobile:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      repassword:new FormControl('',Validators.required)
      
    });

  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private signupService: SignupService) { }

  ngOnInit(): void {
    
  }

  saveUser(){
        console.log('Form data ',this.registrationForm .value);
        this.user.name = this.registrationForm .controls['name'].value;
        this.user.email = this.registrationForm .controls['email'].value;
        this.user.mobile = this.registrationForm .controls['mobile'].value;
        this.user.password = this.registrationForm .controls['password'].value;
        this.user.repassword = this.registrationForm .controls['repassword'].value;
        
        
        console.log(' name ',this.user.name)

    if (this.registrationForm.valid) {
      this.signupService.userSignup(this.registrationForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/login'))
      });
    }
      
      }

    /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.registrationForm.controls[controlName].hasError(errorName);
  } 

}
