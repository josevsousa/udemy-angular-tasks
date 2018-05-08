import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from "../models/task.model";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() task: Task;
  @Output() selectTask = new EventEmitter<Task>();
  @Output() performTask = new EventEmitter<Task>(); //usado para o botao toggle

  /*
    <app-task-item [task]="jose" (selectTask)="onSelectTask($event)"> </app-task-item>
  */ 

  executeAction(action: string): void{
    this[action].EventEmitter(this.task); // tipo de um if/else ver na session3/aula15 do Plinio
  }

}
