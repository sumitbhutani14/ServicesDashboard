import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentsService } from '../students.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogStudentComponent } from '../delete-dialog-student/delete-dialog-student.component';
import { ShowDetailsDialogComponent } from '../show-details-dialog/show-details-dialog.component';
import { Service } from '../service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css'],
})
export class AllStudentsComponent implements OnInit {
  allStudentsSource: Student[] = [];
  allServices: Service[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'status'/* ,
    'details',
    'actions', */
  ];
  ssIndex = 0;
  detailsColumns: string[] = [
    'cpu', 
    'memory'
  ];

  constructor(
    private studentService: StudentsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    /* this.studentService.get().subscribe((data) => {
      this.allStudentsSource = data;
    }); */

    this.studentService.getAllServices().subscribe((data) => {
      if (data) {
        this.allServices = data;
        console.log(this.allServices);
        console.log(this.allServices[this.ssIndex].details);
      }
    });
  }

  openShowMoreModal(row: any) {
    const dialogRef = this.dialog.open(ShowDetailsDialogComponent, {
      width: '500px',
      data: row,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('openShowMoreModal | afterClosed- ', result);
    });
  }

  rowClicked(row: any, event: any) {
    console.log(row);
    console.log(event);
    this.openShowMoreModal(row)
  }
}
