import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { UserComponent } from './user/user.component';
import { DatatypesComponent } from './datatypes/datatypes.component';
import { DirectivesComponent } from './directives/directives.component';

import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { NgswitchdemoComponent } from './components/ngswitchdemo/ngswitchdemo.component';
import { DatabindingdemoComponent } from './components/databindingdemo/databindingdemo.component';
import { NgstyledemoComponent } from './components/ngstyledemo/ngstyledemo.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';
import { ProductComponent } from './components/product/product.component';
import { TodoComponent } from './components/todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './services/todo.service';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { StylenclassComponent } from './components/stylenclass/stylenclass.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormValidationComponent } from './components/reactive-form-validation/reactive-form-validation.component';
import { ParentoneComponent } from './components/parentone/parentone.component';
import { ChildoneComponent } from './components/childone/childone.component';
import { PipesdemoComponent } from './components/pipesdemo/pipesdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DatatypesComponent,
    DirectivesComponent,
    UsersComponent,
    NgswitchdemoComponent,
    DatabindingdemoComponent,
    NgstyledemoComponent,
    NgclassdemoComponent,
    ProductComponent,
    TodoComponent,
    TemplateFormComponent,
    StylenclassComponent,
    ReactiveFormComponent,
    ReactiveFormValidationComponent,
    ParentoneComponent,
    ChildoneComponent,
    PipesdemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
