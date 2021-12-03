import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../shared/User';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private fb : FormBuilder,
    private AuthService : AuthService) { }
  UserSaved : User = {email : "",
   password : "",
   firstname:"",
   lastname:"",
   username:""
  };
  Authform !: FormGroup;
  
  ngOnInit(): void {
    this.createForm();
  }
  createForm(){
    this.Authform = this.fb.group({
      mail:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      username:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      Confirmpassword:['',Validators.required],
    })
  }

  onSubmit(){
    this.UserSaved.email = this.Authform.controls['mail'].value;
    this.UserSaved.password = this.Authform.controls['password'].value;
    this.UserSaved.username = this.Authform.controls['username'].value;
    this.UserSaved.firstname = this.Authform.controls['firstname'].value;
    this.UserSaved.lastname = this.Authform.controls['lastname'].value;
    console.log(this.UserSaved);
    this.AuthService.SignUp(this.UserSaved).subscribe(res=>console.log(res));
    this.Authform.reset();
  }
  ConfirmationWrong(){
    if(this.Authform.controls['password'].value != this.Authform.controls['Confirmpassword'].value){
      return true;
    }
    return false;
}

}
