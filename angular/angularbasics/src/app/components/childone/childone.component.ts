import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  /**
  template:`
  <p>childone works!</p>
<p>Message from parent {{message}}</p>
  `,
   */
  styleUrls: ['./childone.component.css']
})
export class ChildoneComponent implements OnInit {

  @Input() message:string=""
  childprop:string="I am your child"

  msgChild:string="Message from child"
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit(this.msgChild)
  }

}
