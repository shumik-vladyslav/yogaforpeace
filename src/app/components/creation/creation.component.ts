import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent implements OnInit {
  images = [];
  currentIndex = 0;

  constructor(
    public dataService: DataService
  ) {
    this.dataService.getData().subscribe(res => {
      this.images = res[0].media;
    })
  }

  ngOnInit(): void { }

  showImage(index, direction?) {
    var img = document.querySelector('.preview-image');
    (img as any).src = this.images[index];
    this.currentIndex = index;
    var previewContainer = document.querySelector('.preview-container');
    previewContainer.classList.add(direction);
    setTimeout(() => {
      previewContainer.classList.remove('next-image-enter', 'prev-image-enter', 'next-image-exit', 'prev-image-exit');
    }, 300);
  }

  showNextImage() {
    if (this.currentIndex == this.images.length - 1) {
      var previewContainer = document.querySelector('.preview-container');
      this.currentIndex = 0;
      previewContainer.classList.add('next-image-exit');
      setTimeout(() => {
        this.showImage(this.currentIndex, 'next-image-enter');
        previewContainer.classList.remove('next-image-exit');
      }, 300);
    } else {
      var previewContainer = document.querySelector('.preview-container');
      previewContainer.classList.add('next-image-exit');
      setTimeout(() => {
        this.showImage((this.currentIndex + 1) % this.images.length, 'next-image-enter');
        previewContainer.classList.remove('next-image-exit');
      }, 300);
    }
  }

  showPrevImage() {
    if (this.currentIndex == 0) {
      var previewContainer = document.querySelector('.preview-container');
      previewContainer.classList.add('prev-image-exit');
      setTimeout(() => {
        this.showImage(this.images.length - 1, 'prev-image-enter');
        previewContainer.classList.remove('prev-image-exit');
      }, 300);
    } else {
      console.log("pr", this.currentIndex);
      var previewContainer = document.querySelector('.preview-container');
      previewContainer.classList.add('prev-image-exit');
      setTimeout(() => {
        this.showImage(this.currentIndex - 1, 'prev-image-enter');
        previewContainer.classList.remove('prev-image-exit');
      }, 300);
    }
  }

  openPreview(index) {
    var previewContainer = document.querySelector('.preview-container');
    this.currentIndex = index;
    this.showImage(this.currentIndex);
    previewContainer.classList.add('open');
  }

  closePreview() {
    var previewContainer = document.querySelector('.preview-container');
    previewContainer.classList.remove('open');
  }

}
