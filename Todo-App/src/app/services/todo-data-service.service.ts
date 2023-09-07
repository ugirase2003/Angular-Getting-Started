import { Injectable } from '@angular/core';
import { Todo } from '../Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  todos:Todo[];
  constructor() { 
    if(localStorage.getItem("todos") == null)
    this.todos=[];
    else
    this.todos=JSON.parse(localStorage.getItem("todos"));
  }
  //return all todos
  getTodos():Todo[]{
    return this.todos;
  }
}

// by using service we can share data across other components in the entire project
//we will inject this service where we want to access data 
