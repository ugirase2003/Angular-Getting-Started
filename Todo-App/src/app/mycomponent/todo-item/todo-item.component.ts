import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  // we are defining below
 @Input() todo:Todo;
 @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();
 @Output() todoDone:EventEmitter<Todo>=new EventEmitter();
 @Input()i:number;
  constructor(){}
  ngOnInit():void{}
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("btn clicked")
  }
onCheckClick(todo:Todo){
  console.log(todo)
  this.todoDone.emit(todo);
  console.log(todo)
}

}