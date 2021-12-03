import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authservice:AuthService) { }
  username?: String;
  subscription?:Subscription;
  isAuthenticated?:boolean;
  hidden = false;
  ngOnInit(): void {
    this.subscription = this.authservice.getUsername().
    subscribe(username=>this.username = username);
  }
  
  logout(){
    this.authservice.logOut();
  }

}
