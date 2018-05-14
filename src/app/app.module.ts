import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { 
  MatToolbarModule,
  MatListModule,
  MatLineModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule
 } from "@angular/material";

import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule, AngularFirestore  } from "angularfire2/firestore";

import { AppComponent } from './app.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    TaskListComponent,
    TaskDialogComponent
  ],
  entryComponents: [
    TaskDialogComponent  //implementação necessaria para o funcionamento do Dialog sendo usado pela forma de passar um component por parametro
  ],
  imports: [
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
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
