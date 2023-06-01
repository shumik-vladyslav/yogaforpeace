import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-picture-preview',
  templateUrl: './picture-preview.component.html',
  styleUrls: ['./picture-preview.component.scss']
})
export class PicturePreviewComponent implements OnInit {
  path: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      data: any
    },
    public dialogRef: MatDialogRef<PicturePreviewComponent>
  ) {
    this.path = data;
   }

  ngOnInit(): void {
  }

}
