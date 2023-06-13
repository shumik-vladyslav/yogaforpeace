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
  videoPlaying: boolean = false;
  video1Playing: boolean = false;
  constructor(
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.video = document.getElementById("bgvideo");
    this.video1 = document.getElementById("bgvideot");
    const general = document.getElementById("general");
    general.addEventListener('play', () => {
      window.removeEventListener('touchstart', (event) => {
        this.playVid();
      });
      window.removeEventListener('mouseover', (event) => {
        this.playVid();
      });
    }, false);
    window.addEventListener('touchstart', (event) => {
      this.playVid();
    }, false);
    window.addEventListener('mouseover', (event) => {
      this.playVid();
    }, false);
    this.video.onplaying = (event) => {
      this.videoPlaying = true;
      console.log("Video is no longer paused.");
    };
    this.video1.onplaying = (event) => {
      this.video1Playing = true;
      console.log("Video1 is no longer paused.");
    };
  }

  playVid() {
    if (!this.videoPlaying) {
      this.video.muted = true;
      this.video.load();
      setTimeout(() => {
        this.video.play();
      }, 500);
    }
    if (!this.video1Playing) {
      this.video1.muted = true;
      this.video1.load();
      setTimeout(() => {
        this.video1.play();
      }, 500);
    }
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
