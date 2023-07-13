import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent implements OnInit {
  photo = [];
  children = [];
  portraits = [];
  currentPhotoIndex = 0;
  currentChildrenIndex = 0;
  currentPortraitsIndex = 0;
  currentPhotoText = '';
  currentChildrenText = '';
  currentPortraitsText = '';

  constructor(
    public dataService: DataService
  ) {
    this.dataService.getData().subscribe(res => {
      this.photo = res[0].photo;
      this.children = res[0].children;
      this.portraits = res[0].portraits;
    })
  }

  ngOnInit(): void { }

  scrollTo(id): void {
    const element = document.getElementById(id);
    let yOffset = 0;
    // if (window.innerWidth < 661) {
    //   yOffset = 120;
    // }
    const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  showImage(index, slider: number, direction?) {
    document.body.style.overflowY = "hidden";
    var img = document.querySelector('.preview-image');
    switch (slider) {
      case 0:
        (img as any).src = this.photo[index].url;
        this.currentPhotoText = this.photo[index].description
        this.currentPhotoIndex = index;
        break;
      case 1:
        (img as any).src = this.children[index].url;
        this.currentChildrenText = this.children[index].description
        this.currentChildrenIndex = index;
        break;
      case 2:
        (img as any).src = this.portraits[index].url;
        this.currentPortraitsText = this.portraits[index].description
        this.currentPortraitsIndex = index;
        break;
      default: 0
        break;
    }
    var previewContainer = document.querySelector('.preview-container');
    previewContainer.classList.add(direction);
    setTimeout(() => {
      previewContainer.classList.remove('next-image-enter', 'prev-image-enter', 'next-image-exit', 'prev-image-exit');
    }, 300);
  }

  showNextImage(slider: number) {
    switch (slider) {
      case 0:
        this.nextPhoto();
        break;
      case 1:
        this.nextChildren();
        break;
      case 2:
        this.nextPortraits();
        break;
      default: 0
        break;
    }
  }

  nextPhoto() {
    if (this.currentPhotoIndex == this.photo.length - 1) {
      var previewContainer = document.querySelector('.preview-container');
      this.currentPhotoIndex = 0;
      previewContainer.classList.add('next-image-exit');
      setTimeout(() => {
        this.showImage(this.currentPhotoIndex, 0, 'next-image-enter');
        previewContainer.classList.remove('next-image-exit');
      }, 300);
    } else {
      var previewContainer = document.querySelector('.preview-container');
      previewContainer.classList.add('next-image-exit');
      setTimeout(() => {
        this.showImage((this.currentPhotoIndex + 1) % this.photo.length, 0, 'next-image-enter');
        previewContainer.classList.remove('next-image-exit');
      }, 300);
    }
  }

  nextChildren() {
    if (this.currentChildrenIndex == this.children.length - 1) {
      var previewContainer = document.querySelector('.preview-container');
      this.currentChildrenIndex = 0;
      previewContainer.classList.add('next-image-exit');
      setTimeout(() => {
        this.showImage(this.currentChildrenIndex, 1, 'next-image-enter');
        previewContainer.classList.remove('next-image-exit');
      }, 300);
    } else {
      var previewContainer = document.querySelector('.preview-container');
      previewContainer.classList.add('next-image-exit');
      setTimeout(() => {
        this.showImage((this.currentChildrenIndex + 1) % this.children.length, 1, 'next-image-enter');
        previewContainer.classList.remove('next-image-exit');
      }, 300);
    }
  }

  nextPortraits() {
    if (this.currentPortraitsIndex == this.portraits.length - 1) {
      var previewContainer = document.querySelector('.preview-container');
      this.currentPortraitsIndex = 0;
      previewContainer.classList.add('next-image-exit');
      setTimeout(() => {
        this.showImage(this.currentPortraitsIndex, 2, 'next-image-enter');
        previewContainer.classList.remove('next-image-exit');
      }, 300);
    } else {
      var previewContainer = document.querySelector('.preview-container');
      previewContainer.classList.add('next-image-exit');
      setTimeout(() => {
        this.showImage((this.currentPortraitsIndex + 1) % this.portraits.length, 2, 'next-image-enter');
        previewContainer.classList.remove('next-image-exit');
      }, 300);
    }
  }

  showPrevImage(slider: number) {
    switch (slider) {
      case 0:
        this.prevPhoto();
        break;
      case 1:
        this.prevChildren();
        break;
      case 2:
        this.prevPortraits();
        break;
      default: 0
        break;
    }
  }

  prevPhoto() {
    if (this.currentPhotoIndex == 0) {
      var previewContainer = document.querySelector('.preview-container');
      previewContainer.classList.add('prev-image-exit');
      setTimeout(() => {
        this.showImage(this.photo.length - 1, 0, 'prev-image-enter');
        previewContainer.classList.remove('prev-image-exit');
      }, 300);
    } else {
      var previewContainer = document.querySelector('.preview-container');
      previewContainer.classList.add('prev-image-exit');
      setTimeout(() => {
        this.showImage(this.currentPhotoIndex - 1, 0, 'prev-image-enter');
        previewContainer.classList.remove('prev-image-exit');
      }, 300);
    }
  }

  prevChildren() {
    if (this.currentChildrenIndex == 0) {
      var previewContainer = document.querySelector('.preview-container');
      previewContainer.classList.add('prev-image-exit');
      setTimeout(() => {
        this.showImage(this.children.length - 1, 1, 'prev-image-enter');
        previewContainer.classList.remove('prev-image-exit');
      }, 300);
    } else {
      var previewContainer = document.querySelector('.preview-container');
      previewContainer.classList.add('prev-image-exit');
      setTimeout(() => {
        this.showImage(this.currentChildrenIndex - 1, 1, 'prev-image-enter');
        previewContainer.classList.remove('prev-image-exit');
      }, 300);
    }
  }

  prevPortraits() {
    if (this.currentPortraitsIndex == 0) {
      var previewContainer = document.querySelector('.preview-container');
      previewContainer.classList.add('prev-image-exit');
      setTimeout(() => {
        this.showImage(this.portraits.length - 1, 2, 'prev-image-enter');
        previewContainer.classList.remove('prev-image-exit');
      }, 300);
    } else {
      var previewContainer = document.querySelector('.preview-container');
      previewContainer.classList.add('prev-image-exit');
      setTimeout(() => {
        this.showImage(this.currentPortraitsIndex - 1, 2, 'prev-image-enter');
        previewContainer.classList.remove('prev-image-exit');
      }, 300);
    }
  }

  openPreview(index, slider: number) {
    var previewContainer = document.querySelector('.preview-container');
    switch (slider) {
      case 0:
        this.currentPhotoIndex = index;
        this.showImage(this.currentPhotoIndex, 0);
        break;
      case 1:
        this.currentChildrenIndex = index;
        this.showImage(this.currentChildrenIndex, 1);
        break;
      case 2:
        this.currentPortraitsIndex = index;
        this.showImage(this.currentPortraitsIndex, 2);
        break;
      default: 0
        break;
    }
    previewContainer.classList.add('open');
  }

  closePreview() {
    document.body.style.overflowY = "auto";
    var previewContainer = document.querySelector('.preview-container');
    previewContainer.classList.remove('open');
  }

  goToURl(url) {
    window.open(url);
  }
}
