import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
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
  constructor(private _location: Location,) { }

  ngOnInit(): void {
  }

  goToURl(url) {
    window.open(url);
  }

  goBack(){
    this._location.back();
  }
}
