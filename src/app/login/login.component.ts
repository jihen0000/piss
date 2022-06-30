import { from } from 'rxjs';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mode:Number=0;
  constructor(private authService:AuthenticationService, private router:Router) {

   }

  ngOnInit(): void {
  }
onLogin (Myuser){
  this.authService.login(Myuser)
    .subscribe( resp=>{

      

      let jwt=resp.headers.get('Authorization');
      //console.log(resp.headers.get('Authorization'));
      this.authService.saveToken(jwt);
      
      if(localStorage.getItem("role")== "user"||localStorage.getItem("role")=="USER"){

        alert("WELCOME !!!");
        }
    
      
    },  err=>{
      this.mode=1;})
}
onRegister(){
  this.router.navigateByUrl("/register");
}
}
