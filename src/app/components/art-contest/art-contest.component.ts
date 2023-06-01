import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PicturePreviewComponent } from '../picture-preview/picture-preview.component';

@Component({
  selector: 'app-art-contest',
  templateUrl: './art-contest.component.html',
  styleUrls: ['./art-contest.component.scss']
})
export class ArtContestComponent implements OnInit {
  index: number = 1;
  constructor(
    private dialog: MatDialog
  ) { } 

  ngOnInit(): void {
  }

  goToURl(url) {
    window.open(url);
  }
  previous() {
    if (this.index == 1) {
      this.index = 3;
    } else {
      this.index = this.index - 1;
    }
  }

  scrollTo(id): void {
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  showFullSize(path: string) {
    this.dialog.open(PicturePreviewComponent, {
      width: 'auto',
      height: 'auto',
      data: path
    });
  }

  next() {
    if (this.index == 3) {
      this.index = 1;
    } else {
      this.index = this.index + 1;
    }
  }

}
