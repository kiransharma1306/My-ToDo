import { Component, OnInit ,ViewChildren,ViewChild, Input,QueryList } from '@angular/core';
import {Todo} from '../ToDo';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { AbstractEmitterVisitor } from '@angular/compiler/src/output/abstract_emitter';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-generator',
  templateUrl: './to-do-generator.component.html',
  styleUrls: ['./to-do-generator.component.css']
})
export class ToDoGeneratorComponent implements OnInit {

  @ViewChild('ValueOfToDo') ValueOfToDo;
  @ViewChild('updatedTodo') updatedTodo;
  @ViewChild('SearchToDo') SearchToDo;
  @ViewChild('ValueOfdate') ValueOfdate;
     ;
  todos : Todo[]=[];
  todos_1 : Todo[]=[];
    new_todo  ='';

    newTodo: Todo = new Todo();

  todo : Todo =new Todo;
  constructor() { }

 
  ngOnInit() {
  }
  addTodo(): void
  {this.todos.push(this.newTodo);
    
  }
 
  deleteAll():void{
    this.todos=[];
  }

  deleteToDo(): void{
    var index_1 = this.todos.findIndex(a => a.title===this.todo.title);
        this.todos.splice(index_1,1);
      }
  searchToDo() :void{
    
   // var index_2 = this.todos.findIndex(a => a ===this.SearchToDo.nativeElement.value);
    //var index_3 = this.todos.indexOf(todolike) !==-1;
   //this.new_todo =this.todos[index_2].toString();
 this.todos_1=this.todos.filter(a =>a.title.includes(this.SearchToDo.nativeElement.value));


  }
 

  /*
  updateToDo(todo : String  ):void{
    var index_2 = this.todos.findIndex(a => a===todo);
    this.todos.splice(index_2,1,this.updatedTodo.nativeElement.value);
    
    
  }

  
  */

}

