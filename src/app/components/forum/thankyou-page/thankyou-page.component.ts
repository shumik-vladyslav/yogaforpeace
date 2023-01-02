import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thankyou-page',
  templateUrl: './thankyou-page.component.html',
  styleUrls: ['./thankyou-page.component.scss']
})
export class ThankyouPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  goToLink(url: string){
    window.open(url, "_blank");
  }
}
