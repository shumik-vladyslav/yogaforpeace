import { Component, Inject, Injector, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  @Input() data;
  dialogData
  constructor(
    // public dialogRef: MatDialogRef<NewsPageComponent>,
    private injector: Injector,
  ) {
    this.dialogData = this.injector.get(MAT_DIALOG_DATA, null);
    if (this.dialogData) {
     console.log(this.dialogData);
     
    }
   }

  ngOnInit(): void {
    // console.log(this.dataRef);
    
  }

}
