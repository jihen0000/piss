import { AuthenticationService } from 'src/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
users:any;

  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    let resp=this.authService.getUsers();
    resp.subscribe((data)=>this.users=data);
  }

}
