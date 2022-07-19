import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyledemo',
  templateUrl: './ngstyledemo.component.html',
  styleUrls: ['./ngstyledemo.component.css']
})
export class NgstyledemoComponent implements OnInit {

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "country": 'USA'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  getColor(country:string):string {
    let ccolor='orange'
    switch (country) {
      case 'UK':
        ccolor= 'green';
        break;
        //return ccolor
      case 'USA':
        ccolor= 'blue';
        //return ccolor 
        break;       
      case 'HK':
        ccolor= 'red';
       // return ccolor
       break;
    }
    return ccolor
  }

}
