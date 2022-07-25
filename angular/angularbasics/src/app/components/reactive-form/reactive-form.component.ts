import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  regUserForm:FormGroup | any
  constructor(formBuilder:FormBuilder) {

    this.regUserForm=formBuilder.group({
      firstName:[],
      lastName:[],
      emailId:[]
    })
   }

  ngOnInit(): void {
  }

  UserRegistration(frmValues: FormGroup) {
    if (!frmValues.valid) {
      console.log('Form is Invalid');
      return;
    }
    console.log(frmValues)
    console.log(frmValues.value)
    console.log('FirstName: ' + frmValues.controls.firstName.value);
    console.log('LastName: ' + frmValues.controls.lastName.value);
    console.log('EmailID: ' + frmValues.controls.emailId.value);

    frmValues.reset();
  }

}
