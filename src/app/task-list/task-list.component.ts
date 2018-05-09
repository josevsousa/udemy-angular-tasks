import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Task } from "../models/task.model";
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  // tasks: Task[] = [
  //   {
  //     uid: '',
  //     title: 'Learn Angular',
  //     done: false
  //   },
  //   { 
  //     uid: '',
  //     title: 'Learn Firebase',
  //     done: true
  //   }
  // ]

  tasks$: Observable<Task[]>;
  selectTask: Task;

  constructor( private taskService: TaskService ){}

  ngOnInit(): void{
    this.tasks$ = this.taskService.tasks.valueChanges();
  }

  onPerformTask(task: Task): void {
    console.log(task)
  }

}
