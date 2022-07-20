import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  UserRegistration(frmValues:NgForm){
    if (!frmValues.valid)
      {
        console.log('invalid form')
        return
      }
    console.log("user registration")
    console.log(frmValues.value)
    console.log('FirstName: ' + frmValues.controls.firstName.value);
   console.log('first name ',frmValues.value['firstName'])

  }

}
