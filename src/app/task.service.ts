import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Task } from "./models/task.model";
import { promise } from 'protractor';
import { Observable } from 'rxjs/Observable';
import { CollectionReference } from '@firebase/firestore-types';

@Injectable()
export class TaskService {

  tasks: AngularFirestoreCollection<Task>;
 
  constructor(private db: AngularFirestore) {
    this.setTasks(); //execultar a função setTasks()  
   }

  // MONTA UMA INSTANCIA DO TASK SINCRONIZADA LA DO FIRESTORES   
  private setTasks(): void{
    this.tasks = this.db.collection<Task>('/tasks',
      (ref: CollectionReference) => ref.orderBy('done', 'asc').orderBy('title', 'asc')  //ordena os registros done em ordem crescente
    );
  }

  // CRUD GET, CREATE, UPDATE, DELETE

  get(uid: string): Observable<Task> {
    return this.tasks.doc<Task>(uid).valueChanges();
  }

  create(task: Task): Promise<void> {
    const uid = this.db.createId();  //cria uma chave unica
    // /tasks/rekdjfsff23ee2rw/ aqui vai nosso task
    return this.tasks.doc<Task>(uid)   //caminho para se criar no firestore a partir do /Tasks
      .set({
        uid, // o mesmo que uid: uid,
        title: task.title,
        done: false
      });      
  }

  update(task: Task): Promise<void> {
    return this.tasks.doc<Task>(task.uid)
      .update(task);
  }

  delete(task: Task): Promise<void> {
    return this.tasks.doc<Task>(task.uid)
      .delete();
  }  

}
