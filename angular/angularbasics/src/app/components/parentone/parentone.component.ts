import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { ChildoneComponent } from '../childone/childone.component';

@Component({
  selector: 'app-parentone',
  templateUrl: './parentone.component.html',
  styleUrls: ['./parentone.component.css']
})
export class ParentoneComponent implements OnInit,AfterViewInit  {

  msgFromParent="Hi from parent"

  message:string='';

  @ViewChild(ChildoneComponent) child: any;

  constructor() { }
  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
    this.message=this.child.childprop


  }

  ngOnInit(): void {
  }

  receiveMessage($event: string) {
    this.message = $event
  }

}
