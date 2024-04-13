import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details-dialog.component.html',
  styleUrls: ['./show-details-dialog.component.css'],
})
export class ShowDetailsDialogComponent implements OnInit {

  displayedColumns: string[] = [
    'key',
    'value'
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ShowDetailsDialogComponent>
  ) {}

  ngOnInit(): void {
    console.log('ShowDetailsDialogComponent | data- ', this.data);
  }

  closeDialog() {
    console.log('closeDialog');
    this.dialogRef.close(this.data);
  }
}
