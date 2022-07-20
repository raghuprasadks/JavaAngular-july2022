import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

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
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
