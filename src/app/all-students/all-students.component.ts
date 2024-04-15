import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { trigger, state, style, transition, animate } from '@angular/animations'

import { Student } from '../student';
import { StudentsService } from '../students.service';
import { ServicesService } from '../services.service';
import { ShowDetailsDialogComponent } from '../show-details-dialog/show-details-dialog.component';
import { Service } from '../service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AllStudentsComponent implements OnInit {
  allStudentsSource: Student[] = [];
  allServices: Service[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'status',
    'actions'/* ,
    'details',
    'actions', */
  ];
  ssIndex = 0;
  detailsColumns: string[] = [
    'CPU', 
    'Memory'
  ];
  iconStatusMap = {
    'red': 'error',
    'green': 'check_circle',
    'orange': 'warning'
  }
  iconName='error';
  selectedEnv: String = "PRD50";
  expandedElement: any = null;

  constructor(
    private studentService: StudentsService,
    private servicesService: ServicesService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.servicesService.getAllServices().subscribe((data) => {
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

  showHideDetails(element: any) {
    this.expandedElement = this.expandedElement === element ? null : element;
  }

  rowClicked(row: any) {
    // this.openShowMoreModal(row)
    this.showHideDetails(row);
  }
}
