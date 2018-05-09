import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Task } from "./models/task.model";

@Injectable()
export class TaskService {

  tasks: AngularFirestoreCollection<Task>;

  constructor(private db: AngularFirestore) {
    this.setTasks(); //execultar a função setTasks()
   }

  private setTasks(): void{
    this.tasks = this.db.collection<Task>('/tasks');
  }

}
