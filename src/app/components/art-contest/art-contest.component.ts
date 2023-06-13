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
  video;
  video1;
  constructor(
    private dialog: MatDialog
  ) {
   } 

  ngOnInit(): void {
    this.video = document.getElementById("bgvideo");
    this.video1 = document.getElementById("bgvideot");
    window.addEventListener("mousemove", (event) => {
      console.log(event);
      this.playVid();
    });
  }

  playVid() {
    this.video.play();
    this.video1.play();
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
