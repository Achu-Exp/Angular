import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ListComponent } from "../../ui/list/list.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ListComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

   todolist: any[] = [];

  newtodo = new FormGroup({
    addnewtodo: new FormControl(''),
  });

  constructor(public api: ApiService) {}

  ngOnInit() {
    console.log('Initial ToDoList:', this.todolist);
    this.api.getTodoList().subscribe((res: any) => {
      console.log('API Response:', res);
      this.todolist = res.todos || [];
      console.log('Updated ToDoList:', this.todolist);
    });
  }

  onUpdateTodo(updatedTodo: any) {
    const index = this.todolist.findIndex((todo) => todo.id === updatedTodo.id);
    if (index !== -1) {
      this.todolist[index] = updatedTodo;
      console.log('Updated To-Do List:', this.todolist);
    }
  }

  removeAnItem(event: any) {
    this.todolist = this.todolist.filter((item: any) => item.id !== event);
    console.log('Updated ToDoList after removal:', this.todolist);
  }
  addAnItem(event:any){
    this.todolist = this.todolist.filter((item: any) => item.id !== event);
    console.log('Updated ToDoList after Addition:', this.todolist);
  }

  onSubmit() {
    const newitem = this.newtodo.value.addnewtodo;
    if (newitem && newitem.trim()) {
      const newItem = {
        id: this.todolist.length + 1,
        todo: newitem,
        completed: false,
        userId: 1,
      };
      this.todolist.push(newItem);
      this.newtodo.reset();
      console.log('New Item Added:', newItem);
    } else {
      console.error('New item is empty or invalid');
    }
  }
}
