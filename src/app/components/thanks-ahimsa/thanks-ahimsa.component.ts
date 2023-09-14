import { Component, OnInit } from '@angular/core';
import { Languages } from 'src/app/app.component';

@Component({
  selector: 'app-thanks-ahimsa',
  templateUrl: './thanks-ahimsa.component.html',
  styleUrls: ['./thanks-ahimsa.component.scss']
})
export class ThanksAhimsaComponent implements OnInit {
  lan: string = 'ru';
  presentationUrl: string = '../../../assets/presentations/ahimsa.pdf';
  constructor() { }

  ngOnInit(): void {
    document.body.style.overflowY = "hidden";
    let language = window.localStorage.getItem("language");
    if (language) {
      this.setLanguage(language);
    } else {
      this.setLanguage(this.lan);
    }
  };

  // downloadPresentation(): void {
  //   window.open(
  //     this.presentationUrl,
  //     '_blank'
  //   );
  // }

  setLanguage(language) {
    this.lan = language;
    window.localStorage.setItem("language", this.lan);
    switch (language) {
      case Languages.English:
        this.presentationUrl = '../../../assets/presentations/ahimsa_en.pdf';
        break;
      case Languages.Russian:
        this.presentationUrl = '../../../assets/presentations/ahimsa.pdf';
        break;
      case Languages.Ukrainian:
        this.presentationUrl = '../../../assets/presentations/ahimsa.pdf';
        break;
    }
  }

  goToURl(url) {
    window.open(url);
  }

  telegramClick() {
    this.goToURl('https://t.me/FORUM_AHIMSA')
  }
}
