import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserLogin } from '../shared/UserLogin';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder,
    private AuthService : AuthService) { }
    LoginForm !: FormGroup;

    Userlogin : UserLogin = {username : "",
   password : "",
  };

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.LoginForm = this.fb.group({
      username:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
    })
  }
   onSubmit(){
    this.Userlogin.username = this.LoginForm.controls['username'].value;
    this.Userlogin.password = this.LoginForm.controls['password'].value;
    this.AuthService.Login(this.Userlogin).subscribe(res=>{console.log(res);
      console.log(this.AuthService.isAuthenticated);
    });
    this.LoginForm.reset();
  }
}
