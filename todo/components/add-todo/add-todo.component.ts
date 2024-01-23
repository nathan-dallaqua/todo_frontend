// add-todo.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() addTodo = new EventEmitter<string>();
  newTodo: string = '';

  onSubmit() {
    if (this.newTodo.trim() !== '') {
      this.addTodo.emit(this.newTodo);
      this.newTodo = '';
    }
  }
}
