import { RegUser } from './../app/reg-user';

import { from } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient , HttpHeaders } from '@angular/common/http';

import { JwtHelperService } from "@auth0/angular-jwt";import { User } from 'src/app/user';

@Injectable()
export class AuthenticationService{
    private jwtToken=null;
    private r :string;
    private role:string;
    private name:string;
    private email: string;
    
    private regUser: RegUser;
    private host:string="http://localhost:9092";

    constructor (private http:HttpClient){}
    jwt: string;
    username:string;
    currentUser:User;


    login(user){
        return this.http.post(this.host+"/login",user,{ observe: 'response'});
    }
    register(user){
        return this.http.post(this.host+"/register",user);
    }
    
    saveToken(jwt: string) {
        localStorage.setItem('token',jwt);
        this.jwt=jwt;
        this.parseJWT(this.jwt);
    
      }
      parseJWT(jwt: string){
        let jwtHelper=new JwtHelperService();
        let objJWT=jwtHelper.decodeToken(this.jwt);
        this.username=objJWT.sub;
       
        //this.role=objJWT.role['authority'];
        this.role=objJWT.role[0]['authority'];
        
        localStorage.setItem("username",this.username);
        localStorage.setItem("role",this.role);
        
       
        console.log(this.username);
        console.log(this.role);
    
        console.log(localStorage.getItem("username"));
        console.log(localStorage.getItem("role"));
     
      }
    loadToken(){
        this.jwtToken=localStorage.getItem('token');
    }
    logout(){
        this.jwtToken=null;
        localStorage.removeItem('token');
    }
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization':localStorage.getItem('token')
        })

      };
      public getuser(){
        return this.http.get(this.host+"/Myuser",this.httpOptions);
      }

      public getUsers(){
        return this.http.get(this.host +"/register/all");
      }
      
      public getCandidat()
  {
    //console.log("yemchi");
   // console.log(this.username);

   // console.log(name);
    console.log(this.http.get(this.host+"/profile",this.httpOptions));
    return this.http.get(this.host+"/profile",this.httpOptions);
   
  }

  

  get isAdmin() {
    return this.currentUser && this.currentUser.role == "Admin";
}
get isNormalUser(){

  return this.currentUser && this.currentUser.role=="USER";
}


public  geteamil(){

  return this.http.get(this.host+"/email/"+localStorage.getItem("username"),this.httpOptions);
}
public getname(){
  return this.http.get(this.host+"/name/"+localStorage.getItem("username"),this.httpOptions);
}





  
}