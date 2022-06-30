import { AuthenticationService } from './../services/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule, BsDropdownModule } from 'ngx-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';

import { UserListComponent } from './user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { NormalUserComponent } from './normal-user/normal-user.component';
import { FileUploadModule } from 'ng2-file-upload';





const appRoutes: Routes=[

  {path:"login",component: LoginComponent},
  {path:"register", component:RegistrationComponent},
  {path:"",redirectTo:"login",pathMatch:"full"},
    {path:"register/all",component:UserListComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NormalUserComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FileUploadModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
