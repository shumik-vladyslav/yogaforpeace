import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'yogis-for-peace';
  lan: string = 'ru';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {
    let language = window.localStorage.getItem("language");
    if (language) {
      this.setLanguage(language);
    } else {
      this.setLanguage(this.lan);
    }
   }
  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      let r = this.route;
      while (r.firstChild) {
        r = r.firstChild;
      }
    });
  }

  setLanguage(language) {
    this.lan = language;
    window.localStorage.setItem("language", this.lan);
    switch (language) {
      case Languages.English:
        this.translate.setDefaultLang(Languages.English);
        break;
      case Languages.Russian:
        this.translate.setDefaultLang(Languages.Russian);
        break;
      case Languages.Ukrainian:
        this.translate.setDefaultLang(Languages.Ukrainian);
        break;
    }
  }
}
export enum Languages {
  Russian = 'ru',
  English = 'en',
  Ukrainian = 'ua'
}