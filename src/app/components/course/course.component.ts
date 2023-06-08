import { Component, OnInit } from '@angular/core';
import { tns } from "../../../../node_modules/tiny-slider/src/tiny-slider"

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    tns({
      "container": '.my-slider',
      "items": 5,
      "arrowKeys": true,
      "swipeAngle": false,
      "speed": 400
    });
  }

}
