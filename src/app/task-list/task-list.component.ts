import { Component } from '@angular/core';

import { Task } from "../models/task.model";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  tasks: Task[] = [
    {
      uid: '',
      title: 'Learn Angular',
      done: false
    },
    { 
      uid: '',
      title: 'Learn Firebase',
      done: true
    }
  ]

  onPerformTask(task: Task): void {
    console.log(task)
  }

}
