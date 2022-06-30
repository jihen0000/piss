import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
errorMessage:string;
roleSelected: any ={};
modifiedtext: string;

mode:number=0;
user :User= new User("","","","","");
password2:string;

  constructor(private authService:AuthenticationService, private router:Router) {

  }

  ngOnInit(): void {
  }
  onRegister(){
    console.log(this.user);
    console.log(this.password2);


    if(this.user.password!="" && this.password2!=""&&this.user.username!=""){
      if(this.user.password!=this.password2){
        alert("Use the same password");
      }else{

         console.log(this.user);
          this.authService.register(this.user)
          .subscribe(resp=>{

            if(resp=="400"){
              alert("user exist !!");
            }
            if(resp=="200"){
              alert("WELCOME");
              this.router.navigateByUrl('/login');
            }

          },err=>{
          })

      }

    /*
      selectChangeHandler(event: any){
        this.role= event.target.value;
      }*/

    }/*
    OnRoleSelected(val: string){
      this.CustomFunction(val);
    }
    CustomFunction(val: string){
      this.modifiedtext= val;
    }*/


  }
}
    
    

    
    
  


