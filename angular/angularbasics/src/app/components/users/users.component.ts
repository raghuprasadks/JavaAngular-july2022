import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  showExtended: boolean = true;
  loaded: boolean = true;

  constructor() { }

  ngOnInit(): void {
    /**
    this.users=[
      {
        firstName:'Rahul',
        lastName:'Kumar',
        age:24,
        address:{
          street:"MG Road",
          city:"Bengaluru",
          state:"Karnataka"
        }
      },
      {
        firstName:'Rashmi',
        lastName:'Nagaraj',
        age:24,
        address:{
          street:"Koramangala",
          city:"Bengaluru",
          state:"Karnataka"
        }
      },
      {
        firstName:'Abdul',
        lastName:'Rehman',
        age:24,
        address:{
          street:"Purna Pragna College Street",
          city:"Udupi",
          state:"Karnataka"
        }
      },
      {
        firstName:'Abdul',
        lastName:'Rehman',
        age:24,
        address:{
          street:"",
          city:"Udupi",
          state:"Karnataka"
        }
      }

    ] **/
  }

}
