import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylenclass',
  templateUrl: './stylenclass.component.html',
  styleUrls: ['./stylenclass.component.css']
})
export class StylenclassComponent implements OnInit {

  gender:string="male"
  constructor() { }

  ngOnInit(): void {
  }

  addStyle()
  {
    return {'font-size.px':28,'font-weight':'bold','color':this.gender=='male'?'blue':'pink'}
  }

  addClasses(){
    return {'btn-bold':false,'btn-italic':true,'btn-blue':true}
  }

}
