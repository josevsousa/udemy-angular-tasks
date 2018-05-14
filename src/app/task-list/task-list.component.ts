import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Task } from "../models/task.model";
import { TaskService } from '../task.service';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { take } from "rxjs/operators/take";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  tasks$: Observable<Task[]>;
  selectTask: Task;
  spinner = true;

  constructor( 
    private  dialog: MatDialog,
    private taskService: TaskService ){}

  ngOnInit(): void{
    this.tasks$ = this.taskService.tasks.valueChanges();
    this.tasks$
      .pipe(take(1))  //quando pegar o 1 elemento da nossa lista do firestore
      .subscribe(()=> {
        this.spinner = false;
      })
  }

  // togle change
  onPerformTask(task: Task): void {
    task.done = !task.done;
    this.taskService.update(task);
  }

  // task? = parametro opcional! 
  showDialog(task?: Task): void {
    console.log(task);
    const config: MatDialogConfig<any> = (task)? {data: {task}} : null;
    this.dialog.open(TaskDialogComponent, config); 
  }

  onDelete(task: Task): void{
    this.taskService.delete(task);
    // console.log(task)
  }


}
