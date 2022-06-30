import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  appareils: any[];
  

  constructor(private authService:AuthenticationService , private router:Router) { }

  ngOnInit(): void {
  }
  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
  onRegister(){
    this.router.navigateByUrl("/register");
  }
  
}
