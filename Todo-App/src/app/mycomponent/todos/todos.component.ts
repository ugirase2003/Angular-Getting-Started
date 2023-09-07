import { Component,inject } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { TodoDataService } from 'src/app/services/todo-data-service.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  title="Ujjwal";
  todos:Todo[];
  todosDataService:TodoDataService=inject(TodoDataService)
  constructor(){
    
    // demo data
    // this.todos=[{
    //   title:"Task 1",
    //   desc:"Task 1 Description",
    //   active:true

    // }]

    // if(localStorage.getItem("todos") == null)
    // this.todos=[];
    // else
    // this.todos=JSON.parse(localStorage.getItem("todos"));

    //now we are getting data with service
    this.todos=this.todosDataService.getTodos();
   
  }
  ngOnInit():void{

  }
  deleteTodo(todo:Todo){
    console.log(todo)
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos))
   
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  toggleTodo(todo:Todo){
    const index=this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    console.log(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
}
