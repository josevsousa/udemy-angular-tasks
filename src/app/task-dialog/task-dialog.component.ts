import { Component, OnInit } from '@angular/core';
import { Task } from "../models/task.model";
import { TaskService } from '../task.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent implements OnInit {

  task: Task = {
    title:''
  };

  constructor(
    private taskService: TaskService,
    private dialogRef: MatDialogRef<TaskDialogComponent> //referencia para o dialog para esse component TaskDialogComponent
  ) { }

  ngOnInit() {
  }

  onSave(): void{
    this.taskService.create(this.task)
      .then(()=>{
        console.log('trask create!');
        this.dialogRef.close();
      }).catch((error)=>{
        console.log(error);
      })

  }

}
