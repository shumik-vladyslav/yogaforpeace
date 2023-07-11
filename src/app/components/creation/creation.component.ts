import { Component, OnInit } from '@angular/core';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgZoom from 'lightgallery/plugins/zoom';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss'],
  // standalone: true,
  // imports: [MatTabsModule],
})
export class CreationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = 'Angular ';
  settings = {
    counter: false,
    plugins: [lgZoom],
    download: false,
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

}
