// todo-list.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from 'todo/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todoList!: any[]; // Adicione o ponto de exclamação aqui

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.todoService.getTodos().subscribe(
      (data) => {
        this.todoList = data;
      },
      (error) => {
        console.error('Erro ao obter a lista de tarefas:', error);
      }
    );
  }
}
