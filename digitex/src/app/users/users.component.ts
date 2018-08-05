import { Component, OnInit } from '@angular/core';
import { UsersService }   from '../service/users-service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private users:UsersService) { }
data:any;
  ngOnInit() {
    this.load();
  }
  load(){
    this.users.load().subscribe(data => {
      this.data = data
    })
    }
}
