import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download-ahimsa',
  templateUrl: './download-ahimsa.component.html',
  styleUrls: ['./download-ahimsa.component.scss']
})
export class DownloadAhimsaComponent implements OnInit {

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
