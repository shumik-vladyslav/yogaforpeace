import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thanks-ahimsa',
  templateUrl: './thanks-ahimsa.component.html',
  styleUrls: ['./thanks-ahimsa.component.scss']
})
export class ThanksAhimsaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  downloadPresentation(): void {
    window.open(
      '../../../assets/presentations/ahimsa.pdf',
      '_blank'
    );
  }
}
