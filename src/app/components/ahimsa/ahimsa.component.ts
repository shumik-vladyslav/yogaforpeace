import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Languages } from 'src/app/app.component';
import { AdiitionalInfoComponent } from '../adiitional-info/adiitional-info.component';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ahimsa',
  templateUrl: './ahimsa.component.html',
  styleUrls: ['./ahimsa.component.scss']
})
export class AhimsaComponent implements OnInit, AfterViewInit, OnDestroy {
  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    let header = document.querySelector('.head_wrap')
    if (window.pageYOffset > 0) {
      header.classList.add('bg_for_header')
    } else header.classList.remove('bg_for_header')
  }
  url = "https://vosd.bitrix24.eu/rest/4/idujiuxkvouf7pb9/";
  routeParams;
  lan: string = 'ru';
  ahimsaImg: string;
  first: number = 0;
  middle: number = 1;
  last: number = 2;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  firstIm: number = 0;
  middleIm: number = 1;
  lastIm: number = 2;
  visible: boolean = false;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  selectedCountry = CountryISO["Ukraine"];
  play1: boolean = false;
  play2: boolean = false;
  play3: boolean = false;
  isSendRegistrationMessage: boolean = false;
  menu: boolean = false;
  description;
  description1;
  description2;
  description3;
  description4;
  slides: any = [];
  unsubscribeAll$: Subject<null> = new Subject();
  tgChannel = 'https://t.me/ahimsa_vow';
  slidesIm: any = [
    {
      index: 0,
      // name: 'Юлиана',
      // description: 'Так как я являюсь мамой, то передаю знание ахимсы (ненасилия) своему сыну, и это зарождает у ребенка Дхармичное видение мира, которое, конечно же, будет вести его по жизни правильным, благоприятным путем…',
      link: 'http://instagram.com/yushi4721/',
      path: 'assets/Images/re/re1.png',
    },
    {
      index: 1,
      // name: 'Алекс',
      // description: 'Врата, это то, на что можно опереться, например мы как в болоте и не можем выбраться, потом появляется тонкий лед, он крепнет и мы уже можем спокойно ходить не проваливаясь... Ахимса – это такой лед, на который мы можем опереться и больше не проваливаться.',
      link: 'http://instagram.com/m.natalia73/',
      path: 'assets/Images/re/re2.png',
    },
    {
      index: 2,
      // name: 'Александр',
      // description: '«Что касается физиологических показателей – улучшилось давление, лучше переношу физические нагрузки, общие самочувствие стало легче... что касаемо эмоционального состояния – внутренняя агрессия, особенно беспричинная практически вообще ушла»',
      link: 'http://instagram.com/marina.osadchuk.shostenko/',
      path: 'assets/Images/re/re3.png',
    },
    {
      index: 3,
      // name: 'Анандамайи',
      // description: 'В каком мире мы хотим жить?! В мире где есть внутренне понимание единства, уважение, достоинства и священности жизни или в мире невежества, борьбы, нападения и защиты…',
      link: 'http://instagram.com/',
      path: 'assets/Images/re/re4.png',
    },
    {
      index: 4,
      // name: 'Анандамайи',
      // description: 'В каком мире мы хотим жить?! В мире где есть внутренне понимание единства, уважение, достоинства и священности жизни или в мире невежества, борьбы, нападения и защиты…',
      link: 'http://instagram.com/alina.dial/',
      path: 'assets/Images/re/re5.png',
    },
    {
      index: 5,
      // name: 'Анандамайи',
      // description: 'В каком мире мы хотим жить?! В мире где есть внутренне понимание единства, уважение, достоинства и священности жизни или в мире невежества, борьбы, нападения и защиты…',
      link: 'http://instagram.com/krasnokutskasvetlana/',
      path: 'assets/Images/re/re6.png',
    },
    {
      index: 6,
      // name: 'Анандамайи',
      // description: 'В каком мире мы хотим жить?! В мире где есть внутренне понимание единства, уважение, достоинства и священности жизни или в мире невежества, борьбы, нападения и защиты…',
      link: 'http://instagram.com/sadanandabramhachari/',
      path: 'assets/Images/re/re7.png',
    }
  ]

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private angularFirestore: AngularFirestore,
    private dialog: MatDialog,
    private translate: TranslateService,
  ) {
    let language = window.localStorage.getItem("language");
    if (language) {
      this.setLanguage(language);
    } else {
      this.setLanguage(this.lan);
    }
    this.setSlides();
  }
  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }

  setSlides() {
    this.slides = [
      {
        index: 0,
        name: 'Юлиана',
        description: this.description,
        path: 'https://firebasestorage.googleapis.com/v0/b/yogisforpeace-84027.appspot.com/o/videos%2F1.mp4?alt=media&token=a95144ff-f544-4453-91a0-be391e649458',
      },
      {
        index: 1,
        name: 'Алекс',
        description: this.description1,
        path: 'https://firebasestorage.googleapis.com/v0/b/yogisforpeace-84027.appspot.com/o/videos%2F2.mp4?alt=media&token=9040c773-fac3-475a-b6f3-c61a200eed83',
      },
      {
        index: 2,
        name: 'Александр',
        description: this.description2,
        path: 'https://firebasestorage.googleapis.com/v0/b/yogisforpeace-84027.appspot.com/o/videos%2F3.mp4?alt=media&token=b0723716-3eb0-41c1-934f-9d0927fdcbd3',
      },
      {
        index: 3,
        name: 'Анандамайи',
        description: this.description3,
        path: 'https://firebasestorage.googleapis.com/v0/b/yogisforpeace-84027.appspot.com/o/videos%2F4.mp4?alt=media&token=06539234-9197-4207-b697-f569a8f3e0e8',
      },
      {
        index: 4,
        name: 'Кристиана',
        description: this.description4,
        path: 'https://firebasestorage.googleapis.com/v0/b/yogisforpeace-84027.appspot.com/o/videos%2F5.mp4?alt=media&token=d093987b-d1a1-40b7-b1eb-ed48cdd17296',
      }
    ]
  }

  checkLang(lan) {
    switch (lan) {
      case Languages.English:
        this.description = "Since I am a mother, I pass on the knowledge of ahimsa (non-violence) to my son, and this gives the child a Dharmic vision of the world, which, of course, will lead him through life in the right, favorable way ...";
        this.description1 = "The Vrata is something that you can rely on, for example, we are like in a swamp and cannot get out, then thin ice appears, it gets stronger and we can already walk calmly without falling through ... Ahimsa is such ice that we can lean on and fail no more.";
        this.description2 = "As for physiological indicators, my blood pressure has improved, I can tolerate physical activity better, my general state of health has become easier ... with regards to the emotional state, internal aggression, especially unreasonable, has practically completely disappeared";
        this.description3 = "What world do we want to live in?! In a world where there is an internal understanding of unity, respect, dignity and sacredness of life, or in a world of ignorance, struggle, attack and defense ...";
        this.description4 = "I took a vow of ahimsa for life, because I realized that I do unconscious actions in thoughts, words and hurt both other people and myself. Therefore, the vow of ahimsa became for me the key to awareness and control of my feelings ...";
        this.tgChannel = 'https://t.me/ahimsa_vow';
        this.ahimsaImg = 'assets/Images/log-shimsauk.png';
        this.setRevieverEn()
        break;
      case Languages.Russian:
        this.description = "Так как я являюсь мамой, то передаю знание ахимсы (ненасилия) своему сыну, и это зарождает у ребенка Дхармичное видение мира, которое, конечно же, будет вести его по жизни правильным, благоприятным путем…";
        this.description1 = "Врата, это то, на что можно опереться, например мы как в болоте и не можем выбраться, потом появляется тонкий лед, он крепнет и мы уже можем спокойно ходить не проваливаясь... Ахимса – это такой лед, на который мы можем опереться и больше не проваливаться.";
        this.description2 = "Что касается физиологических показателей – улучшилось давление, лучше переношу физические нагрузки, общие самочувствие стало легче... что касаемо эмоционального состояния – внутренняя агрессия, особенно беспричинная практически вообще ушла.";
        this.description3 = "В каком мире мы хотим жить?! В мире где есть внутренне понимание единства, уважение, достоинства и священности жизни или в мире невежества, борьбы, нападения и защиты…";
        this.description4 = "Я приняла обет ахимсы на всю жизнь, потому что поняла, что делаю неосознанные действия в мыслях, словах и делаю больно как другим людям, так и самой себе. Поэтому обет ахимсы стал для меня ключом к осознанности и контролю своих чувств…";
        this.tgChannel = 'https://t.me/yogisforpeace_life';
        this.ahimsaImg = 'assets/Images/log-shimsa.png';
        this.setRevieverRu();
        break;
      case Languages.Ukrainian:
        this.description = "Так як я є мамою, то передаю знання ахімси (ненасильства) своєму синові, і це зароджує у дитини Дхармічне бачення світу, яке, звичайно ж, вестиме його по життю правильним, сприятливим шляхом…";
        this.description1 = "Врата, це те, на що можна опиратись, наприклад ми як у болоті і не можемо вибратися, потім з'являється тонкий лід, він міцніє і ми вже можемо спокійно ходити не провалюючись... Ахімса – це такий лід, на який ми можемо опиратись і більше не провалюватися.";
        this.description2 = "Що стосується фізіологічних показників - покращився тиск, краще переношу фізичні навантаження, загальнe самопочуття стало краще... що стосується емоційного стану - внутрішня агресія, особливо безпричинна практично взагалі зникла";
        this.description3 = "У якому світі ми хочемо жити? У світі де є внутрішнє розуміння єдності, пошана, гідність та священність життя або у світі невігластва, боротьби, нападу та захисту…";
        this.description4 = "Я прийняла обітницю ахімси на все життя, тому що зрозуміла, що роблю несвідомі дії в думках, словах і роблю боляче як іншим людям, так і самій собі. Тому обітниця ахімси стала для мене ключем до усвідомленості та контролю своїх чуттів.";
        this.tgChannel = 'https://t.me/yogisforpeace_life';
        this.ahimsaImg = 'assets/Images/log-shimsa.png';
        this.setRevieverRu();
        break;
    }
    this.setSlides();
  }

  setLanguage(language) {
    this.lan = language;
    window.localStorage.setItem("language", this.lan);
    this.checkLang(this.lan);
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

  ngAfterViewInit(): void {
    let video1 = document.getElementsByTagName('video')[0];
    const self = this;
    video1.addEventListener('play', function () {
      self.play1 = true;
    }, false);
    video1.addEventListener('pause', function () {
      self.play1 = false;
    }, false);
    let video2 = document.getElementsByTagName('video')[1];
    video2.addEventListener('play', function () {
      self.play2 = true;
    }, false);
    video2.addEventListener('pause', function () {
      self.play2 = false;
    }, false);
    let video3 = document.getElementsByTagName('video')[2];
    video3.addEventListener('play', function () {
      self.play3 = true;
    }, false);
    video3.addEventListener('pause', function () {
      self.play3 = false;
    }, false);
  }

  ngOnInit(): void {
    this.addScriptsToHead();
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params);
      this.routeParams = params;
      // const userId = params['userId'];
      // console.log(userId);
    });
    window.scroll(0, 0);
  }

  showMenu() {
    this.menu = true;
  }

  showFullInfo(n: any) {
    this.dialog.open(AdiitionalInfoComponent, {
      width: 'auto',
      height: 'auto',
      data: n
    });
  }

  goToURl(url) {
    window.open(url);
  }

  next() {
    if (this.last < this.slides.length - 1 && window.innerWidth > 660) {
      this.visible = true;
      setTimeout(() => {
        this.first = this.first + 1;
        if (window.innerWidth > 850) {
          this.middle = this.middle + 1;
        }
        if (window.innerWidth > 660) {
          this.last = this.last + 1;
        }
      }, 200);
      setTimeout(() => {
        this.visible = false;
      }, 500);
    } else if (this.first < this.slides.length - 1 && window.innerWidth < 661) {
      this.visible = true;
      setTimeout(() => {
        this.first = this.first + 1;
        if (window.innerWidth > 850) {
          this.middle = this.middle + 1;
        }
        if (window.innerWidth > 660) {
          this.last = this.last + 1;
        }
      }, 200);
      setTimeout(() => {
        this.visible = false;
      }, 500);
    }
  }

  previousIm() {
    if (this.firstIm > 0) {
      this.firstIm = this.firstIm - 1;
      if (window.innerWidth > 850) {
        this.middleIm = this.middleIm - 1;
      }
      if (window.innerWidth > 660) {
        this.lastIm = this.lastIm - 1;
      }
    }
  }

  nextIm() {
    if (this.lastIm < this.slidesIm.length - 1 && window.innerWidth > 660) {
      this.firstIm = this.firstIm + 1;
      if (window.innerWidth > 850) {
        this.middleIm = this.middleIm + 1;
      }
      if (window.innerWidth > 660) {
        this.lastIm = this.lastIm + 1;
      }
    } else if (this.firstIm < this.slidesIm.length - 1 && window.innerWidth < 661) {
      this.firstIm = this.firstIm + 1;
      if (window.innerWidth > 850) {
        this.middleIm = this.middleIm + 1;
      }
      if (window.innerWidth > 660) {
        this.lastIm = this.lastIm + 1;
      }
    }
  }

  scrollTo(id): void {
    const element = document.getElementById(id);
    let yOffset = 80;
    if (window.innerWidth < 661) {
      yOffset = 120;
    }
    const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  previous() {
    if (this.first > 0) {
      this.visible = true;
      setTimeout(() => {
        this.first = this.first - 1;
        if (window.innerWidth > 850) {
          this.middle = this.middle - 1;
        }
        if (window.innerWidth > 660) {
          this.last = this.last - 1;
        }
      }, 200);
      setTimeout(() => {
        this.visible = false;
      }, 500);
    }
  }

  telegramRegister() {
    window.open(`https://tg.pulse.is/yogiesforpeas_bot?start=64ccacceed365df05b0745d7|UTM_Source=${this.routeParams?.utm_source}|UTM_medium=${this.routeParams?.utm_medium}|UTM_campaign=${this.routeParams?.utm_campaign}`)
  }

  setRevieverRu() {
    this.slidesIm = [
      {
        index: 0,
        // name: 'Юлиана',
        // description: 'Так как я являюсь мамой, то передаю знание ахимсы (ненасилия) своему сыну, и это зарождает у ребенка Дхармичное видение мира, которое, конечно же, будет вести его по жизни правильным, благоприятным путем…',
        link: 'http://instagram.com/yushi4721/',
        path: 'assets/Images/re/re1.png',
      },
      {
        index: 1,
        // name: 'Алекс',
        // description: 'Врата, это то, на что можно опереться, например мы как в болоте и не можем выбраться, потом появляется тонкий лед, он крепнет и мы уже можем спокойно ходить не проваливаясь... Ахимса – это такой лед, на который мы можем опереться и больше не проваливаться.',
        link: 'http://instagram.com/m.natalia73/',
        path: 'assets/Images/re/re2.png',
      },
      {
        index: 2,
        // name: 'Александр',
        // description: '«Что касается физиологических показателей – улучшилось давление, лучше переношу физические нагрузки, общие самочувствие стало легче... что касаемо эмоционального состояния – внутренняя агрессия, особенно беспричинная практически вообще ушла»',
        link: 'http://instagram.com/marina.osadchuk.shostenko/',
        path: 'assets/Images/re/re3.png',
      },
      {
        index: 3,
        // name: 'Анандамайи',
        // description: 'В каком мире мы хотим жить?! В мире где есть внутренне понимание единства, уважение, достоинства и священности жизни или в мире невежества, борьбы, нападения и защиты…',
        link: 'http://instagram.com/',
        path: 'assets/Images/re/re4.png',
      },
      {
        index: 4,
        // name: 'Анандамайи',
        // description: 'В каком мире мы хотим жить?! В мире где есть внутренне понимание единства, уважение, достоинства и священности жизни или в мире невежества, борьбы, нападения и защиты…',
        link: 'http://instagram.com/alina.dial/',
        path: 'assets/Images/re/re5.png',
      },
      {
        index: 5,
        // name: 'Анандамайи',
        // description: 'В каком мире мы хотим жить?! В мире где есть внутренне понимание единства, уважение, достоинства и священности жизни или в мире невежества, борьбы, нападения и защиты…',
        link: 'http://instagram.com/krasnokutskasvetlana/',
        path: 'assets/Images/re/re6.png',
      },
      {
        index: 6,
        // name: 'Анандамайи',
        // description: 'В каком мире мы хотим жить?! В мире где есть внутренне понимание единства, уважение, достоинства и священности жизни или в мире невежества, борьбы, нападения и защиты…',
        link: 'http://instagram.com/sadanandabramhachari/',
        path: 'assets/Images/re/re7.png',
      }
    ]
  }

  setRevieverEn() {
    this.slidesIm = [
      {
        index: 0,
        // name: 'Юлиана',
        // description: 'Так как я являюсь мамой, то передаю знание ахимсы (ненасилия) своему сыну, и это зарождает у ребенка Дхармичное видение мира, которое, конечно же, будет вести его по жизни правильным, благоприятным путем…',
        link: 'http://instagram.com/yushi4721/',
        path: 'assets/Images/re/re1en.png',
      },
      {
        index: 1,
        // name: 'Алекс',
        // description: 'Врата, это то, на что можно опереться, например мы как в болоте и не можем выбраться, потом появляется тонкий лед, он крепнет и мы уже можем спокойно ходить не проваливаясь... Ахимса – это такой лед, на который мы можем опереться и больше не проваливаться.',
        link: 'http://instagram.com/m.natalia73/',
        path: 'assets/Images/re/re2en.png',
      },
      {
        index: 2,
        // name: 'Александр',
        // description: '«Что касается физиологических показателей – улучшилось давление, лучше переношу физические нагрузки, общие самочувствие стало легче... что касаемо эмоционального состояния – внутренняя агрессия, особенно беспричинная практически вообще ушла»',
        link: 'http://instagram.com/marina.osadchuk.shostenko/',
        path: 'assets/Images/re/re3en.png',
      },
      {
        index: 3,
        // name: 'Анандамайи',
        // description: 'В каком мире мы хотим жить?! В мире где есть внутренне понимание единства, уважение, достоинства и священности жизни или в мире невежества, борьбы, нападения и защиты…',
        link: 'http://instagram.com/',
        path: 'assets/Images/re/re4en.png',
      },
      {
        index: 4,
        // name: 'Анандамайи',
        // description: 'В каком мире мы хотим жить?! В мире где есть внутренне понимание единства, уважение, достоинства и священности жизни или в мире невежества, борьбы, нападения и защиты…',
        link: 'http://instagram.com/alina.dial/',
        path: 'assets/Images/re/re5en.png',
      },
      {
        index: 5,
        // name: 'Анандамайи',
        // description: 'В каком мире мы хотим жить?! В мире где есть внутренне понимание единства, уважение, достоинства и священности жизни или в мире невежества, борьбы, нападения и защиты…',
        link: 'http://instagram.com/krasnokutskasvetlana/',
        path: 'assets/Images/re/re6en.png',
      },
      {
        index: 6,
        // name: 'Анандамайи',
        // description: 'В каком мире мы хотим жить?! В мире где есть внутренне понимание единства, уважение, достоинства и священности жизни или в мире невежества, борьбы, нападения и защиты…',
        link: 'http://instagram.com/sadanandabramhachari/',
        path: 'assets/Images/re/re7en.png',
      }
    ]
  }

  addScriptsToHead() {
    const head1 = document.getElementsByTagName('head')[0];
    const script1 = document.createElement('noscript');
    script1.innerHTML = `<img height="1" width="1" style="display:none"src="https://www.facebook.com/tr?id=626453055020322&ev=PageView&noscript=1"/>`;
    head1.insertBefore(script1, head1.firstChild);
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.innerHTML = `  !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefor(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '626453055020322');fbq('track', 'PageView');`;
    head.insertBefore(script, head.firstChild);
  }

  telegramClick() {
    if (this.lan === 'ru') {
      this.goToLink('https://t.me/yogiesforpeas_bot?start=ZGw6MTI2NTI1')
    } else {
      this.goToLink('https://t.me/yogiesforpeas_bot?start=ZGw6MTI2NTI4')
    }
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
