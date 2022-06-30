import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { Component } from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome To Job Link';
  constructor(private authService:AuthenticationService , private router:Router){}
  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }


}
