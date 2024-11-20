import { Component, Input, output } from '@angular/core';

@Component({
    selector: 'app-list',
    imports: [],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss'
})
export class ListComponent {

  @Input() todoitem = {
    id:0,
    todo:"",
    completed:false,
    userId:""
  }
  removeItem=output<number>();

  onCheckBoxValueChanged(){
    this.todoitem.completed=!this.todoitem.completed
    console.log(this.todoitem.completed)
  }
  onDelete(){
    this.removeItem.emit(this.todoitem.id)
  }

}
