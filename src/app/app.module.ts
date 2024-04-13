import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AllStudentsComponent } from './all-students/all-students.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { AddStudentComponent } from './add-student/add-student.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { EditStudentComponent } from './edit-student/edit-student.component';
import {MatIconModule} from '@angular/material/icon';
import { DeleteDialogStudentComponent } from './delete-dialog-student/delete-dialog-student.component';
import { ShowDetailsDialogComponent } from './show-details-dialog/show-details-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [AppComponent, AllStudentsComponent, AddStudentComponent, EditStudentComponent, DeleteDialogStudentComponent, ShowDetailsDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
