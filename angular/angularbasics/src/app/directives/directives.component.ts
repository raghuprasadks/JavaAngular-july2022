import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  showAddress:boolean = true;

  employees=[
    {
      code:1,
      name:"ravi",
      dept:"IT",
      address:{"city":"Bengaluru"}

    },
    {
      code:2,
      name:"rahul",
      dept:"IT",
      address:{"city":"Mysore"}
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
