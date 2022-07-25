import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentone',
  templateUrl: './parentone.component.html',
  styleUrls: ['./parentone.component.css']
})
export class ParentoneComponent implements OnInit {

  msgFromParent="Hi from parent"

  constructor() { }

  ngOnInit(): void {
  }

}
