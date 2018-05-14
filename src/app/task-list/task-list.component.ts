import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatDialog } from '@angular/material';
import { Task } from "../models/task.model";
import { TaskService } from '../task.service';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  tasks$: Observable<Task[]>;
  selectTask: Task;

  constructor( 
    private  dialog: MatDialog,
    private taskService: TaskService ){}

  ngOnInit(): void{
    this.tasks$ = this.taskService.tasks.valueChanges();
  }

  // togle change
  onPerformTask(task: Task): void {
    task.done = !task.done;
    this.taskService.update(task);
  }

  // task? = parametro opcional! 
  showDialog(task?: Task): void {
    console.log(task);
    this.dialog.open(TaskDialogComponent); 
  }


}
