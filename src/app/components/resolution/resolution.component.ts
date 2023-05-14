import { Component, OnInit } from '@angular/core';
import { Languages } from 'src/app/app.component';

@Component({
  selector: 'app-resolution',
  templateUrl: './resolution.component.html',
  styleUrls: ['./resolution.component.scss']
})
export class ResolutionComponent implements OnInit {

  constructor() { }
  textToShow: string;
  resolutionTextRu = `
  ПЕТИЦИЯ "ОБ ОБЪЯВЛЕНИИ XXI ВЕКА МЕЖДУНАРОДНЫМ ВЕКОМ НЕНАСИЛИЯ И СОСТРАДАНИЯ"

  Мы, члены движения "Конгресс мира", обращаемся ко всем организациям, общественным деятелям и людям Земли с предложением поддержать и подписать петицию.
  
  
  Воспитание всесторонне и гармонично развитой личности – миссия каждой страны и нации
  
  Великая задача, возложенная судьбой, мировой историей и культурой на каждую нацию и страну, государство – не только обеспечение выживания и безопасности своих людей, но и воспитание гармонично развитой личности, облагораживание, возвышение душ на их жизненном пути, помощь им в раскрытии своего внутреннего потенциала, поддержка каждого в его движении к совершенству и постижении высшей Божественной Истины.
  Осознание такой миссии – атрибут всех высокоразвитых цивилизаций, живущих по принципам свободы и цветущей сложности.
  
  
   Войны – пережиток тёмного прошлого
  
  Любые войны с себе подобными – акт насилия. Это атавизм, анахронизм, рудиментарный пережиток тёмного прошлого расы людей, её дурная карма, делающая невозможным выполнение миссии раскрытия своего потенциала.
  Войны не являются спутником высокоразвитых, высококультурных цивилизаций, живущих по принципам свободы и цветущей сложности.
  Войны – это откат назад, к примитивным цивилизациям, уход в культ грубой силы, упрощение. Это атрибуты несостоявшихся, негуманных, неразвитых цивилизаций.
  Пока они не будут изжиты – у людей не будет ни постоянного счастья, ни развития.
  В связи с этим, всеми здравыми силами среди населения Земли должна быть создана единая мощная интеллектуальная, духовная, общественная культура, не применяющая физическое и психологическое насилие – образцы содержатся во всех мировых культурах и религиях, в ХХ веке ярким примером был Махатма Ганди.
  Это культура добра и миролюбия. Насилие в любой форме, в том числе в форме идеологии, риторики или аргумента в политических спорах, категорически неприемлемо и недопустимо.
  Культура добра и миролюбия могла бы создать такую атмосферу на Земле, что использование воинственной риторики вызывало бы противодействие со стороны международных и национальных общественных институтов – от религиозных и культурных до политических.
  Пойдём ли мы как человечество вперёд и вверх или будем скатываться вниз, зависит от того, насколько мы освоили принципы ненасилия, ахимсы.
  
  Что мы предлагаем
  
  ХХI век должен быть объявлен на международном уровне веком ахимсы, то есть, гармонии, любви и сострадания, отсутствия подавления, что означает:
  
  1. Ахимса (отсутствие физического и психологического насилия), наряду с всесторонним саморазвитием личности, должна быть признана всеми народами как фундаментальная культурная и нравственная ценность в XXI веке.
  2. Ахимса должна популяризироваться как незыблемый фундамент, на котором строится культура и политика всех стран.
  3. Ахимсе следует обучать как важному предмету в детских учреждениях, школах и ВУЗах.
  4. Ахимса должна стать предметом глубоких научных исследований.
  5. Войны должны быть остановлены везде и навсегда так же, как некогда в древности людьми были усмирены и приручены дикие животные.
  6. Все войны должны быть изжиты в корне, не только на уровне действий, но и на уровне идеологии, культуры и риторики всех наций, стран и культур так же, как в людьми когда-то были изжиты многие опасные вирусы, болезни.
  7. Негуманные, воинственные культуры и страны, развязывающие войны или допускающие подобные идеологии, риторику, не должны признаваться частью цивилизованного, гуманного мира. Они должны ставиться перед необходимостью либо изолироваться, либо принимать ахимсу, ненасилие как общечеловеческую парадигму.
  
  Наша жизнь и жизнь каждого – это драгоценность. 
  Насилие на Земле должно быть остановлено.
  Приглашаем сказать «нет» войне и насилию, и «да» миру и гармонии – подписав эту петицию.
  
  Международная координационная группа организаторов движения Конгресса мира
`;
  resolutionTextEn = `
  PETITION "ON DECLARATION OF THE 21st CENTURY AN INTERNATIONAL CENTURY OF NON-VIOLENCE AND COMPASSION"

  We, members of the movement "Congress of World Peace", appeal to all organisations, public figures and people of the Earth with a proposal to support and sign the petition.
  
  
  Education of a well-rounded and harmonious personality is the task and mission of every nation and country
  
  The great task that destiny, world history, and culture entrusted to every nation and state is not only to ensure survival and safety of its people, but also to educate a harmoniously developed personality, to ennoble and elevate the soul on its life path, to help it in unfolding its inner potential, to support everyone in their journey to perfection and understanding the supreme divine Truth.
  Awareness of such a mission is an attribute of all highly developed civilisations living according to the principles of freedom and blossoming complexity.
  
  
  Wars are a rudimentary remnant of the dark past
  
  Any wars with our own kind are an act of violence. They are an atavism, an anachronism, a rudimentary remnant of the dark past of the human race, its bad karma that makes it impossible to unfold one's potential.
  Highly developed, highly cultured civilisations living according to the principles of freedom and blossoming complexity are not accompanied by wars.
  Wars are a rollback to primitive civilisations, a retreat into a cult of brute force, a simplification. These are attributes of failed, inhumane, and undeveloped civilisations.
  Until they are eliminated, people will not have permanent happiness or development.
  In this regard a unified powerful intellectual, spiritual, and social culture that does not use physical or psychological violence must be created by all sound forces among the population of the Earth. There are examples in all world cultures and religions. Mahatma Gandhi was a vivid example in the 20th century.
  It is a culture of kindness and peacefulness. Violence in any form, including the form of an ideology, rhetoric, or an argument in political disputes, is categorically unacceptable and unallowable.
  A culture of kindness and peacefulness could create such an atmosphere on earth that using militant rhetoric would cause opposition from international and national public institutions, from religious and cultural to political ones.
  Whether we as humanity will go forward and upwards or go downhill depends on the extent to which we have mastered the principles of non-violence, ahimsa.
  
  What we offer
  
  The 21st century should be declared at the international level a century of ahimsa, that is, harmony, love and compassion, and absence of suppression. That means:
  
  1. Ahimsa (absence of physical and psychological violence) along with well-rounded self-development of an individual should be recognised by all nations as a fundamental cultural and moral value in the 21st century.
  2. Ahimsa should be popularised as a solid foundation on which the culture and politics of all countries are built.
  3. Ahimsa should be taught as an important subject at childcare facilities, schools, and universities.
  4. Ahimsa should be a subject of deep scientific research.
  5. Wars should be stopped everywhere and forever just as people tamed wild animals in ancient times.
  6. All wars must be eradicated at the root, not only at the level of action, but also at the level of ideology, culture, and rhetoric of all nations, countries, and cultures, just as many dangerous viruses and diseases were once eradicated by people.
  7. Inhumane and militant cultures and countries waging wars or allowing similar ideologies or rhetoric should not be recognised as part of the civilised, humane world. They should face the need to either be isolated or embrace ahimsa, non-violence as a universal paradigm.
  
  Our life and everyone's life is precious. 
  Violence on Earth must be stopped.
  We invite you to say "no" to war and violence and "yes" to peace and harmony by signing this petition.
  
  International coordinating group of organisers of the movement "Congress of World Peace"
`;
  resolutionTextUa = `
  ПЕТИЦІЯ "ПРО ОГОЛОШЕННЯ XXI СТОЛІТТЯ МІЖНАРОДНИМ СТОЛІТТЯМ НЕНАСИЛІЯ ТА СПІВЧУТТЯ"

  Ми, члени руху "Конгрес світу", звертаємось до всіх організацій, громадських діячів та людей Землі з пропозицією підтримати та підписати петицію.
 
 
  Виховання всебічно та гармонійно розвиненої особистості – місія кожної країни та нації
 
  Велике завдання, покладене долею, світовою історією та культурою на кожну націю та країну, держава – не лише забезпечення виживання та безпеки своїх людей, а й виховання гармонійно розвиненої особистості, облагородження, піднесення душ на їхньому життєвому шляху, допомога їм у розкритті свого внутрішнього потенціалу , підтримка кожного в його русі до досконалості та осягнення вищої Божественної Істини.
  Усвідомлення такої місії – атрибут усіх високорозвинених цивілізацій, які живуть за принципами свободи та квітучої складності.
 
 
   Війни – пережиток темного минулого
 
  Будь-які війни із собі подібними – акт насильства. Це атавізм, анахронізм, рудиментарний пережиток темного минулого раси людей, її погана карма, яка унеможливлює виконання місії розкриття свого потенціалу.
  Війни не є супутником високорозвинених, висококультурних цивілізацій, що живуть за принципами свободи та квітучої складності.
  Війни - це відкат назад, до примітивних цивілізацій, відхід у культ грубої сили, спрощення. Це атрибути тих, що не відбулися, негуманних, нерозвинених цивілізацій.
  Поки вони не будуть зжиті – люди не мають ні постійного щастя, ні розвитку.
  У зв'язку з цим, усіма здоровими силами серед населення Землі має бути створена єдина потужна інтелектуальна, духовна, суспільна культура, яка не застосовує фізичне та психологічне насильство – зразки містяться у всіх світових культурах та релігіях, у ХХ столітті яскравим прикладом був Махатма Ганді.
  Це культура добра та миролюбства. Насильство у будь-якій формі, у тому числі у формі ідеології, риторики чи аргументу у політичних суперечках, категорично неприйнятне та неприпустиме.
  Культура добра і миролюбності могла б створити таку атмосферу на Землі, що використання войовничої риторики викликало б протидію з боку міжнародних та національних громадських інститутів – від релігійних та культурних до політичних.
  Чи підемо ми як людство вперед і вгору чи скочуватимемося вниз, залежить від того, наскільки ми освоїли принципи ненасильства, ахімси.
 
  Що ми пропонуємо
 
  ХХI століття має бути оголошено на міжнародному рівні віком ахімси, тобто гармонії, любові та співчуття, відсутності придушення, що означає:
 
  1. Ахімса (відсутність фізичного та психологічного насильства), поряд із всебічним саморозвитком особистості, має бути визнана всіма народами як фундаментальна культурна та моральна цінність у XXI столітті.
  2. Ахімса має популяризуватися як непорушний фундамент, на якому будується культура та політика всіх країн.
  3. Ахімсе слід навчати як важливого предмета у дитячих закладах, школах та ВНЗ.
  4. Ахімса має стати предметом глибоких наукових досліджень.
  5. Війни повинні бути зупинені скрізь і назавжди так само, як колись у давнину людьми були приборкані та приручені дикі тварини.
  6. Усі війни повинні бути зжиті докорінно, не лише на рівні дій, а й на рівні ідеології, культури та риторики всіх націй, країн і культур так само, як у людей колись було зжито багато небезпечних вірусів, хвороб.
  7. Негуманні, войовничі культури та країни, що розв'язують війни або допускають подібні ідеології, риторику, не повинні визнаватись частиною цивілізованого, гуманного світу. Вони повинні ставитися перед необхідністю або ізолюватись, або приймати ахімсу, ненасильство як загальнолюдську парадигму.
 
  Наше життя і життя кожного – це коштовність.
  Насильство на Землі має бути зупинено.
  Запрошуємо сказати «ні» війні та насильству, і «так» миру та гармонії – підписавши цю петицію.
 
  Міжнародна координаційна група організаторів руху Конгресу світу
`;
  lan: string = 'ru';

  ngOnInit(): void {
    let language = window.localStorage.getItem("language");
    if (language) {
      this.setLanguage(language);
    } else {
      this.setLanguage(this.lan);
    }
  }

  setLanguage(language) {
    this.lan = language;
    window.localStorage.setItem("language", this.lan);
    switch (language) {
      case Languages.English:
        this.textToShow = this.resolutionTextEn;
        break;
      case Languages.Russian:
        this.textToShow = this.resolutionTextRu;
        break;
      case Languages.Ukrainian:
        this.textToShow = this.resolutionTextUa;
        break;
    }
  }

  signPetition() {
    window.open('https://chng.it/bfcr9FSM', '_blank');
  }
}
