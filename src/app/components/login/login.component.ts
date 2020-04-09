import { Component, OnInit, ViewChild, NgZone } from '@angular/core';

//imported by me
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm, FormControl } from '@angular/forms'; 
import { userLogin} from "../../models/userLoginDetails";
import { LoginService } from "../../services/login.service";
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileinfoService } from '../../services/profileinfo.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id:string;
  user= new userLogin();
    loginForm = new FormGroup({
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)  
    });

  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private LoginService : LoginService,
    public profilInfo:ProfileinfoService) { }

  ngOnInit(): void {
  }

  message="login to your account";
  loginUser(){
        console.log('Form data ',this.loginForm.value);
        this.user.email = this.loginForm.controls['email'].value;
        this.user.password = this.loginForm.controls['password'].value;
        
        console.log(' name ',this.user.email)
         
    if (this.loginForm.valid) {
      console.log("form values in ts",this.loginForm.value)
      this.LoginService .userLogin(this.loginForm.value).subscribe(res => {
        console.log(res);
        if(res==null){
          this.message="Login Failed:User id or password is incorrect";
          this.router.navigateByUrl('/login');
        }
        else{
         this.id=res._id;
         this.profilInfo.info(this.id);
        this.ngZone.run(() => this.router.navigateByUrl('/userhome'))
      }
      });
    }
 
      }

      /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  } 

}
