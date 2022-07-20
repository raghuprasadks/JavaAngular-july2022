import { Component, OnInit } from '@angular/core';

import { TodoService } from 'src/app/services/todo.service';
import { Todos } from 'src/app/model/Todos';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:Todos[]=[]
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((data:any[])=>{
      console.log("todos ")
      console.log(data)
      this.todos=data
    })
  
  }
}
