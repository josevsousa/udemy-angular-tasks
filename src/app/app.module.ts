import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { 
  MatToolbarModule,
  MatListModule,
  MatLineModule,
  MatSlideToggleModule
 } from "@angular/material";

import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule, AngularFirestore  } from "angularfire2/firestore";

import { AppComponent } from './app.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';



@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    TaskListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatToolbarModule,
    MatListModule,
    MatLineModule,
    MatSlideToggleModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor( private afs: AngularFirestore ) {
    
    afs.firestore.settings({timestampsInSnapshots: true});
 
  }
 }
