// app.component.ts
import { Component } from '@angular/core';
import { TodoService } from 'todo/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private todoService: TodoService) {}

  onAddTodo(newTodo: string) {
    if (newTodo.trim() !== '') {
      this.todoService.addTodo(newTodo).subscribe(
        (addedTodo) => {
          console.log('Tarefa adicionada com sucesso:', addedTodo);
          // Atualizar a lista de tarefas após adicionar uma nova
          // Pode chamar this.getTodoList() do TodoListComponent
        },
        (error) => {
          console.error('Erro ao adicionar tarefa:', error);
        }
      );
    }
  }
}
