import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {url} from '../url';
import { User } from '../shared/User';
import { UserLogin } from '../shared/UserLogin';
import { ProcessHttpErrorsService } from './process-http-errors.service';
import { catchError, map } from 'rxjs/operators';

interface AuthResponse {
  status: string;
  success: string;
  token: string;
  inNeed: boolean;
}

interface JWTResponse {
  status: string;
  success: string;
  user: any;
}
interface Signupresponse{
  success:boolean;
  status:string;
  message:string;
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  tokenKey = 'JWT';
  isAuthenticated: boolean = false;
  username: Subject<string> = new Subject<string>();
  authToken?: string = undefined;
  IsAuthenticatedInNeed: boolean = false;
  
  constructor(private http : HttpClient,
    /*private ProcessHttpErrorsService : ProcessHttpErrorsService*/) { 
  }

  checkJWTtoken() {
    this.http.get<JWTResponse>(url + 'users/checkJWTtoken')
    .subscribe(res => {
      console.log('JWT Token Valid: ', res);
      this.sendUsername(res.user.username);
    },
    err => {
      console.log('JWT Token invalid: ', err);
      this.destroyUserCredentials();
    });
  }

  sendUsername(name: string) {
    this.username.next(name);
  }

  clearUsername() {
    this.username.next(undefined);
  }

  loadUserCredentials() {
    const credentials = JSON.parse(localStorage.getItem(this.tokenKey) || '{}');
    console.log('loadUserCredentials ', credentials);
    if (credentials && credentials.username !== undefined) {
      this.useCredentials(credentials);
      if (this.authToken) {
       this.checkJWTtoken();
      }
    }
  }

  storeUserCredentials(credentials: any) {
    console.log('storeUserCredentials ', credentials);
    localStorage.setItem(this.tokenKey, JSON.stringify(credentials));
    this.useCredentials(credentials);
  }

  useCredentials(credentials: any) {
    this.isAuthenticated = true;
    this.sendUsername(credentials.username);
    this.authToken = credentials.token;
    this.IsAuthenticatedInNeed = credentials.inNeed;
  }

  destroyUserCredentials() {
    this.authToken = undefined;
    this.clearUsername();
    this.isAuthenticated = false;
    localStorage.removeItem(this.tokenKey);
  }


  SignUp(user : User) : Observable<any> {
    return this.http.post<any>(url+'/users/signup', user)
  }

  Login(user : UserLogin) : Observable<any> {
    return this.http.post<any>(url+'/users/login', user)
    .pipe(map(res=>{
      this.storeUserCredentials({username: user.username, token: res.token});
          return {'success': true, 'username': user.username };
    }), 
    /*catchError(error => this.ProcessHttpErrorsService.handleError(error))*/);
  }

  logOut() {
    this.destroyUserCredentials();
  }

  isLoggedIn(): Boolean {
    return this.isAuthenticated;
  }

  getUsername(): Observable<string> {
    return this.username.asObservable();
  }

  getToken(): any {
    return this.authToken;
  }
}
