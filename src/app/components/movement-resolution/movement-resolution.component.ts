import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movement-resolution',
  templateUrl: './movement-resolution.component.html',
  styleUrls: ['./movement-resolution.component.scss']
})
export class MovementResolutionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openUrl(url: string) {
    window.open(
      'https://'+ url,
      '_blank'
    );
  }
}
