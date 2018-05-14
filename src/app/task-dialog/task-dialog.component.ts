import { Component, OnInit, Inject } from '@angular/core';
import { Task } from "../models/task.model";
import { TaskService } from '../task.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent implements OnInit {

  dialogTitle = "new task";

  task: Task = {
    title:''
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,  // Inject Token. pesquise sobre isso!!!!!
    private taskService: TaskService,
    private dialogRef: MatDialogRef<TaskDialogComponent> //referencia para o dialog para esse component TaskDialogComponent
  ) { }

  ngOnInit(): void {
    //se vinher um data no Inject data
    if(this.data){
      this.dialogTitle = "Update task"; //atualizar o titulo da janela dialog task
      this.task = this.data.task; // add a tarefa vinda no data para a task local
    }  
  }

  onSave(): void{
    // se vinher dados no data salve create no operation se nao salve um update
    const operation: Promise<void> = 
      (!this.data)
        ? this.taskService.create(this.task)
        : this.taskService.update(this.task)

    // this.taskService.create(this.task) //enviar o form se for tudo ok exec o then
      operation
      .then(()=>{
        console.log('trask create!');
        this.dialogRef.close();
      }).catch((error)=>{
        console.log(error);
      })

  }

}
