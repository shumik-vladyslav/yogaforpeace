import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-adiitional-info',
  templateUrl: './adiitional-info.component.html',
  styleUrls: ['./adiitional-info.component.scss']
})
export class AdiitionalInfoComponent implements OnInit {
  info: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      data: any
    },
     public dialogRef: MatDialogRef<AdiitionalInfoComponent>
  ) { 
    this.info = data;
  }

  ngOnInit(): void {
  }

}
