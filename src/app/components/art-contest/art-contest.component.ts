import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art-contest',
  templateUrl: './art-contest.component.html',
  styleUrls: ['./art-contest.component.scss']
})
export class ArtContestComponent implements OnInit {
  index: number = 1;
  constructor() { } 

  ngOnInit(): void {
  }

  goToURl(url) {
    window.open(url);
  }
  previous() {
    if (this.index == 1) {
      return;
    } else {
      this.index = this.index - 1;
    }
  }

  next() {
    if (this.index == 3) {
      return;
    } else {
      this.index = this.index + 1;
    }
  }

}
