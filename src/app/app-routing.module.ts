import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Mock } from 'protractor/built/driverProviders';
import { Page1Component } from './page1/page1.component';
import { RegistrationComponent } from './registration/registration.component';




const routes: Routes = [
  {path:'', redirectTo:'page1',pathMatch:'full'},
  
  {path:"page1", component:Page1Component},
  
  {path:"register",component:RegistrationComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
