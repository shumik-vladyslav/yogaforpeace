import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Languages } from 'src/app/app.component';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-resolution',
  templateUrl: './resolution.component.html',
  styleUrls: ['./resolution.component.scss']
})
export class ResolutionComponent implements OnInit {

  constructor(private generalService: GeneralServiceService) { }
  textToShow: string;
  resolutionTextRu = `
    ПЕТИЦИЯ – «ОБ ОБЪЯВЛЕНИИ 21 ВЕКА – МЕЖДУНАРОДНЫМ ВЕКОМ НЕНАСИЛИЯ И СОСТРАДАНИЯ»

  Мы, члены движения «Йоги за мир», обращаемся ко всем организациям, общественным  деятелям и людям Земли, с предложением поддержать и подписать петицию

  «ОБ ОБЪЯВЛЕНИИ 21 ВЕКА – МЕЖДУНАРОДНЫМ ВЕКОМ НЕНАСИЛИЯ И СОСТРАДАНИЯ НА ВСЕЙ ЗЕМЛЕ».


  ВОСПИТАНИЕ ВСЕСТОРОННЕ И ГАРМОНИЧНО РАЗВИТОЙ ЛИЧНОСТИ – ЗАДАЧА И МИССИЯ КАЖДОЙ СТРАНЫ И НАЦИИ

  Великая задача и миссия, возложенная судьбой, мировой историей и культурой на каждую нацию и страну, государство – не только обеспечение выживания, безопасности и защиты своих людей, но и воспитание всесторонне гармонично развитой личности, облагораживание, обучение, возвышение душ на их жизненном пути, помощь им в их саморазвитии, раскрытии своего внутреннего потенциала, поддержка каждого в его движении к совершенству и постижению высшей Божественной Истины.
  Осознание такой миссии – атрибут всех высокоразвитых, высококультурных цивилизаций, живущих по принципам «свободы и цветущей сложности».


  ВОЙНЫ КАК АТАВИЗМ И РУДИМЕНТАРНЫЙ ПЕРЕЖИТОК ТЕМНОГО ПРОШЛОГО

  С этой точки зрения, любые войны с себе подобными, как акт ужасного насилия – это атавизм, анахронизм, рудиментарный пережиток темного прошлого расы людей, ее дурная карма, разрушающая эту задачу и делающая невозможным выполнение этой миссии.
  Это не атрибут высокоразвитых, высококультурных цивилизаций, живущих по принципам «свободы и цветущей сложности».
  Войны – это откат назад, к примитивным цивилизациям, уход в культ грубой силы, упрощение, это атрибуты несостоявшихся, негуманных, неразвитых цивилизаций.
  Пока они не будут изжиты – у людей не будет ни постоянного счастья, ни развития.
  В начале нашего, 21 века, жители Земли прямо столкнулись с беспрецедентными событиями, происходящими в самом центре Европы – ужасной войной, развязанной в Украине.
  Подобное больше не должно никогда повториться.
  В связи с этим, всеми здравыми силами среди населения Земли должна быть создана всемирная, единая, мощная интеллектуальная, духовная, общественная культура ненасилия (ахимсы), давно уже содержащаяся во всех мировых культурах и религиях, а в ХХ веке ярко показанная Махатмой Ганди и другими выдающимися деятелями. Это культура добра, человеколюбия и миролюбия, когда любое насилие как идеология, риторика или аргумент в политических спорах были бы категорически неприемлемы и недопустимы.
  Подобная культура могла бы создать такую атмосферу на Земле, что один только факт использования подобной воинственной риторики или идеологии вызывал бы мощный отпор и противодействие со стороны всех международных и национальных общественных институтов в любой стране – от религиозных и культурных до политических.
  Пойдем ли мы как человечество, вперед и вверх или будем скатываться вниз, зависит от того, насколько мы освоили принципы ненасилия, ахимсы.

  ЧТО МЫ ПРЕДЛАГАЕМ:

  В связи с этим:

  Весь ХХI век должен быть объявлен на международном уровне веком ахимсы – то есть ненасилия, гармонии, любви и сострадания, что автоматически означает, что:

  - ахимса, ненасилие наряду с всесторонним саморазвитием личности должна быть признана всеми народами как фундаментальная культурная и нравственная ценность в 21 веке,
  -ахимса, ненасилие должна популяризироваться, пропагандироваться как незыблемый фундамент, на котором строится культура и политика всех стран,
  - ахимсе следует обучать как важному предмету в детских учреждениях, школах и вузах,
  - ахимса должна стать предметом глубоких научных исследований,
  - войны должны быть изжиты и остановлены везде и навсегда так же, как некогда в древности людьми были усмирены и приручены дикие лесные животные.
  - все войны должны быть также изжиты в корне, не только на уровне действий, но и на уровне идеологии, культуры и риторики всех наций, стран и культур, так же, как в средние века, людьми когда-то были изжиты многие опасные вирусы, болезни.
  - негуманные, воинственные цивилизации, культуры, страны, развязывающие агрессивные войны, или допускающие подобные идеологии, риторику, не должны признаваться частью цивилизованного, гуманного мира и должны ставиться перед необходимостью либо изолироваться, либо принимать ахимсу, ненасилие как общечеловеческую парадигму и мировую идеологию, общую для всех стран и наций.

  Международная координационная группа организаторов движения
  «Йоги за мир»
`;
  resolutionTextEn = `
PETITION "ON DECLARATION OF THE 21st CENTURY AN INTERNATIONAL CENTURY OF NON-VIOLENCE AND COMPASSION"

We, members of the "Yogis for Peace" movement, appeal to all organisations, public figures and people of the Earth with a proposal to support and sign the petition.

"ON DECLARATION OF THE 21st CENTURY AN INTERNATIONAL CENTURY OF NON-VIOLENCE AND COMPASSION"


EDUCATION OF A WELL-ROUNDED AND HARMONIOUS PERSONALITY IS THE TASK AND MISSION OF EVERY NATION AND COUNTRY

The great task and mission that destiny, world history, and culture entrusted to every nation and state is not only to ensure survival, safety, and protection of its people, but also to educate a well-rounded and harmoniously developed personality, to ennoble, educate, elevate the soul on its life path, help it in self-development, unfolding its inner potential, support everyone in their journey to perfection and understanding the supreme divine Truth.
Awareness of such a mission is an attribute of all highly developed, highly cultured civilisations living according to the principles of "freedom and blossoming complexity".


WARS AS AN ATAVISM AND A RUDIMENTARY REMNANT OF THE DARK PAST

From this point of view, any wars with our own kind, as an act of terrible violence, is an atavism, an anachronism, a rudimentary relic of the dark past of the human race, its bad karma that destroys this task and makes it impossible to fulfil this mission.
This is not an attribute of highly developed, highly cultured civilisations living according to the principles of "freedom and blossoming complexity".
Wars are a rollback to primitive civilisations, a retreat into a cult of brute force, a simplification. These are attributes of failed, inhumane, and undeveloped civilizations.
Until they are eliminated, people will not have permanent happiness or development.
At the beginning of our 21st century, the inhabitants of the Earth face unprecedented events taking place in the very centre of Europe - the terrible war unleashed in Ukraine.
Such a thing must never happen again.
In this regard a worldwide, unified powerful intellectual, spiritual, social culture of non-violence (ahimsa) must be created by all sensible forces among the population of the Earth. It has long existed in all world cultures and religions and was vividly demonstrated in the 20th century by Mahatma Gandhi and other prominent figures.
It is a culture of kindness, humanity, and peacefulness when any violence in the form of an ideology, rhetoric, or an argument in political disputes would be categorically unacceptable and unallowable.
This culture could create such an atmosphere on earth that the mere fact of using militant rhetoric or ideology would cause powerful opposition from all international and national public institutions in any country, from religious and cultural to political ones.
Whether we as humanity will go forward and upwards or go downhill depends on the extent to which we have mastered the principles of non-violence, ahimsa.

WHAT WE OFFER:


 The entire 21st century should be declared at the international level a century of ahimsa, that is, non-violence, harmony, love, and compassion. It means that:
• Ahimsa, non-violence along with well-rounded self-development of an individual should be recognised by all nations as a fundamental cultural and moral value in the 21st century.
• Ahimsa, non-violence should be popularised and promoted as a solid foundation on which the culture and politics of all countries are built.
• Ahimsa should be taught as an important subject at childcare facilities, schools, and universities.
• Ahimsa should be a subject of deep scientific research.
• Wars should be stopped everywhere and forever just as people tamed wild forest animals in ancient times.
• All wars must also be eradicated at the root, not only at the level of action, but also at the level of ideology, culture, and rhetoric of all nations, countries, and cultures, just as in the Middle Ages many dangerous viruses and diseases were eradicated by people.
• Inhumane, militant civilisations, cultures, and countries waging aggressive wars or allowing similar ideologies and rhetoric should not be recognised as part of the civilised, humane world. They should face the need to either be isolated or embrace ahimsa, non-violence as a universal paradigm and global ideology common to all countries and nations.

International coordination group, the movement
"Yogis for Peace"
`;
  resolutionTextUa = `
ПЕТИЦІЯ - "ПРО ОГОЛОШЕННЯ 21 СТОЛІТТЯ-МІЖНАРОДНИМ СТОЛІТТЯМ НЕНАСИЛЬСТВА ТА СПІВЧУТТЯ"

Ми, члени руху "Йоги за мир" звертаємось до всіх організацій, громадських діячів та людей Землі, з пропозицією підтримати та підписати петицію

"ПРО ОГОЛОШЕННЯ 21 СТОЛІТТЯ-МІЖНАРОДНИМ СТОЛІТТЯМ НЕНАСИЛЬСТВА ТА СПІВЧУТТЯ НА ВСІЙ ЗЕМЛІ".


ВИХОВАННЯ ВСЕБІЧНО І ГАРМОНІЧНО РОЗВИНЕНОЙ ОСОБИСТОСТІ-ЗАДАЧА І МІСІЯ КОЖНОЇ КРАЇНИ ТА НАЦІЇ

Велике завдання та місія, покладена долею, світовою історією та культурою на кожну націю та країну, держава – не тільки забезпечення виживання, безпеки та захисту своїх людей, а й виховання всебічно гармонійно розвиненої особистості, облагородження, навчання, піднесення душ на їхньому життєвому шляху, допомога їм у їхньому саморозвитку, розкритті свого внутрішнього потенціалу, підтримка кожного в його русі до досконалості та осягнення вищої Божественної Істини.
Усвідомлення такої місії-атрибут усіх високорозвинених, висококультурних цивілізацій, що живуть за принципами "свободи та квітучої складності".

ВІЙНИ ЯК АТАВІЗМ І РУДИМЕНТАРНИЙ ПЕРЕЖИТОК ТЕМНОГО МИНУЛОГО

З цієї точки зору, будь-які війни з собі подібними, як акт жахливого насильства - це атавізм, анахронізм, рудиментарний пережиток темного минулого раси людей, її дурна карма, що руйнує це завдання і робить неможливим виконання цієї місії.
Це не атрибут високорозвинених, висококультурних цивілізацій, що живуть за принципами «свободи і квітучої складності».
Війни - це відкат назад, до примітивних цивілізацій, відхід у культ грубої сили, спрощення, це атрибути недійсних, негуманних, нерозвинених цивілізацій.
Поки вони не будуть зжиті - у людей не буде ні постійного щастя, ні розвитку.
На початку нашого, 21 століття жителі Землі прямо зіткнулися з безпрецедентними подіями, що відбуваються в самому центрі Європи-жахливою війною, розв'язаною в Україні.
Подібне більше не повинно ніколи повторитися.
У зв'язку з цим, усіма здоровими силами серед населення Землі повинна бути створена всесвітня, єдина, потужна інтелектуальна, духовна, суспільна культура ненасильства (ахімси), що давно вже міститься в усіх світових культурах і релігіях, а в ХХ столітті яскраво показана махатмою Ганді та іншими видатними діячами.
Це культура добра, людинолюбства і миролюбства, коли будь-яке насильство як ідеологія, риторика або аргумент у політичних суперечках були б категорично неприйнятні і неприпустимі.
Така культура могла б створити таку атмосферу на Землі, що один тільки факт використання такої войовничої риторики або ідеології викликав би потужну відсіч і протидію з боку всіх міжнародних і національних суспільних інститутів в будь-якій країні-від релігійних і культурних до політичних.
Чи підемо ми як людство, вперед і вгору або будемо скочуватися вниз, залежить від того, наскільки ми освоїли принципи ненасильства, ахімси.
ЩО МИ ПРОПОНУЄМО:

У зв'язку з цим:

Весь XXI вік повинен бути оголошений на міжнародному рівні століттям ахімси, тобто, ненасильства, гармонії, любові і співчуття, що автоматично означає що:

-ахімса, ненасилля поряд зі всебічним саморозвитком особистості повинна бути визнана всіма народами як фундаментальна культурна і моральна цінність у 21 столітті,
-ахімса, ненасилля повинна популяризуватися, пропагуватися як непорушний фундамент, на якому будується культура і політика всіх країн,
-ахімсі слід навчати як важливому предмету в дитячих закладах, школах та Вищих навчальних закладах,
-ахімса повинна стати предметом глибоких наукових досліджень,
- Війни повинні бути зжиті і зупинені скрізь і назавжди так само, як колись в давнину людьми були  заспокоєні і приручені дикі лісові тварини.
-Всі війни повинні бути також зжиті в корені, не тільки на рівні дій, але і на рівні ідеології, культури і риторики всіх націй, країн і культур, також, як у середні століття, людьми колись було зжито багато небезпечних вірусів, хвороб.
-Негуманні, войовничі цивілізації, культури, країни, що розв'язують агресивні війни, або допускають подібні ідеології, риторику, не повинні визнаватися частиною цивілізованого, гуманного світу і ставиться перед необхідністю або ізолюватися або приймати ахімсу, ненасилля як загальнолюдську парадигму і світову ідеологію, спільну для всіх країн і націй.

Міжнародна координаційна група організаторів руху
«Йоги за мир»
`
  ngOnInit(): void {
    console.log("QWEQWEWQEWQEWQEWQE");

    this.generalService.currentLanguage.subscribe((lan) => {
      console.log(lan);
      switch (lan) {
        case Languages.English:
          this.textToShow = this.resolutionTextEn
          break;
        case Languages.Russian:
          this.textToShow = this.resolutionTextRu
          break;
        case Languages.Ukrainian:
          this.textToShow = this.resolutionTextUa
          break;
      }
    })
  }
  signPetition() {
    window.open('https://chng.it/bfcr9FSM', '_blank');
  }
}
