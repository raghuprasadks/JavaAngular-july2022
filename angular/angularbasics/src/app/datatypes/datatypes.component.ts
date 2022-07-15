import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatypes',
  templateUrl: './datatypes.component.html',
  styleUrls: ['./datatypes.component.css']
})
export class DatatypesComponent implements OnInit {

  /**
   * Basic datatypes in type script - string,number,boolean
   */

  course:string="Full Stack Web Development"
  duration:number | undefined;
  rutrainee:boolean = true;

  courseContent:string[] | undefined;
  random:any[] | undefined
  myTuple:[string, number, boolean] | undefined

  emp={
    code:1,
    name:"rahul",
    dept:"IT"
  }

  employees=[
    {
      code:1,
      name:"rahul",
      dept:"IT"
    },
    {
      code:2,
      name:"rajani",
      dept:"IT"
    }  

  ]
  
  constructor() { 
    console.log("datatypes constructor ")
    this.duration=5
  }

  ngOnInit(): void {
    console.log("ngOnInit ")
    this.courseContent=["HTML","CSS","JAVA SCRIPT"]
    this.random=[1,true,"test"]
    this.myTuple=["test",1,false]
  }

}
