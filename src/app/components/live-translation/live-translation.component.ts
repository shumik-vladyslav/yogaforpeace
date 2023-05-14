import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Languages } from 'src/app/app.component';
@Component({
  selector: 'app-live-translation',
  templateUrl: './live-translation.component.html',
  styleUrls: ['./live-translation.component.scss']
})
export class LiveTranslationComponent implements OnInit {
  vishnudevanandaTitle = `
  «Духовное лидерство в
  современном мире. Как
  человечеству выйти из кризиса.
  Каким быть миру в третьем тысячелетии.
  Улучшить мир через обучение, аскезу и
  проповедь»
  `;
  pilotBabaTitle = `
  Благословение Великого Мастера
  `;
  avanhutMaharajTitle = `
  «Главный урок: какой вывод должен сделать каждый из нас в 2022-м году?»
  `;
  adyanathTitle = `
  «Изменчивость мира. Этические максимы. Проблема выбора»
  `;
  satiMataTitle = `
  «Как поддерживать состояние покоя в мировом хаосе, следуя путём ненасилия, принятия и сострадания»
  `;
  bhartiTitle = `
  «Ахимса (ненасилие) в современном обществе – возможна ли она?»
  `;
  visvaranaandaTitle = `
  «Гуру-йога как основа внешней и внутренней гармонии – завтра, вчера и сейчас»
  `;
  shankaraTitle = `
  «Глубокое понимание ахимсы (ненасилия) – как фундаментального принципа жизни и духовной практики»
  `;
  deviTitle = `
  «О современной ситуации в мире – как оставаться преданным Миру и Любви»
  `;
  mihailconstantinovTitle = `
  «Время осознания и трансформации. От потребления к созиданию. Мир через образование и культуру»
  `;
  lovetitle = `
  «На благо всего мира и всех существ в нем»
  `;
  lan: string = 'ru';
  translation = 'https://www.youtube.com/embed/J9ewn0un2Aw';

  constructor(private _location: Location) { }

  ngOnInit(): void {
    let language = window.localStorage.getItem("language");
    if (language) {
      this.setLanguage(language);
    } else {
      this.setLanguage(this.lan);
    }
  }

  goToURl(url) {
    window.open(url);
  }

  goBack() {
    this._location.back();
  }

  setLanguage(language) {
    window.localStorage.setItem("language", language);
    this.lan = language;
    switch (language) {
      case Languages.English:
        this.translation = 'https://www.youtube.com/embed/J9ewn0un2Aw'
        break;
      case Languages.Russian:
        this.translation = 'https://www.youtube.com/embed/JaASJCMVKrE'
        break;
      case Languages.Ukrainian:
        this.translation = 'https://www.youtube.com/embed/JaASJCMVKrE'
        break;
    }
  }
}
