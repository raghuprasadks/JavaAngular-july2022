import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:User = {
    firstName:'',
    lastName:'',
    age:0,
    address:{
      street:"",
      city:"",
      state:""
    }
  };
  constructor() { }

  ngOnInit(): void {

    this.user={
      firstName:'Rahul',
      lastName:'Kumar',
      age:24,
      address:{
        street:"MG Road",
        city:"Bengaluru",
        state:"Karnataka"
      }
    }
  }

}
