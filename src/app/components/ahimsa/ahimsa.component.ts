import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { emailValidator, phoneValidator } from 'src/app/services/validation.service';
import { AdiitionalInfoComponent } from '../adiitional-info/adiitional-info.component';
import { DownloadAhimsaComponent } from '../download-ahimsa/download-ahimsa.component';
import { FormMessage } from '../main-page/main-page.component';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-ahimsa',
  templateUrl: './ahimsa.component.html',
  styleUrls: ['./ahimsa.component.scss']
})
export class AhimsaComponent implements OnInit, AfterViewInit {
  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    let header = document.querySelector('.head_wrap')
    if (window.pageYOffset > 0) {
      header.classList.add('bg_for_header')
    } else header.classList.remove('bg_for_header')
  }
  form: FormGroup;
  url = "https://b24-ay5iam.bitrix24.eu/rest/4/95igs0uaxwczeh83/";
  routeParams;
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
  slides: any = [
    {
      index: 0,
      name: 'Юлиана',
      description: 'Так как я являюсь мамой, то передаю знание ахимсы (ненасилия) своему сыну, и это зарождает у ребенка Дхармичное видение мира, которое, конечно же, будет вести его по жизни правильным, благоприятным путем…',
      path: 'https://firebasestorage.googleapis.com/v0/b/yogisforpeace-84027.appspot.com/o/videos%2F1.mp4?alt=media&token=a95144ff-f544-4453-91a0-be391e649458',
    },
    {
      index: 1,
      name: 'Алекс',
      description: 'Врата, это то, на что можно опереться, например мы как в болоте и не можем выбраться, потом появляется тонкий лед, он крепнет и мы уже можем спокойно ходить не проваливаясь... Ахимса – это такой лед, на который мы можем опереться и больше не проваливаться.',
      path: 'https://firebasestorage.googleapis.com/v0/b/yogisforpeace-84027.appspot.com/o/videos%2F2.mp4?alt=media&token=9040c773-fac3-475a-b6f3-c61a200eed83',
    },
    {
      index: 2,
      name: 'Александр',
      description: '«Что касается физиологических показателей – улучшилось давление, лучше переношу физические нагрузки, общие самочувствие стало легче... что касаемо эмоционального состояния – внутренняя агрессия, особенно беспричинная практически вообще ушла»',
      path: 'https://firebasestorage.googleapis.com/v0/b/yogisforpeace-84027.appspot.com/o/videos%2F3.mp4?alt=media&token=b0723716-3eb0-41c1-934f-9d0927fdcbd3',
    },
    {
      index: 3,
      name: 'Анандамайи',
      description: 'В каком мире мы хотим жить?! В мире где есть внутренне понимание единства, уважение, достоинства и священности жизни или в мире невежества, борьбы, нападения и защиты…',
      path: 'https://firebasestorage.googleapis.com/v0/b/yogisforpeace-84027.appspot.com/o/videos%2F4.mp4?alt=media&token=06539234-9197-4207-b697-f569a8f3e0e8',
    },
    {
      index: 4,
      name: 'Кристиана',
      description: 'Я приняла обет ахимсы на всю жизнь, потому что поняла, что делаю неосознанные действия в мыслях, словах и делаю больно как другим людям, так и самой себе. Поэтому обет ахимсы стал для меня ключом к осознанности и контролю своих чувств…',
      path: 'https://firebasestorage.googleapis.com/v0/b/yogisforpeace-84027.appspot.com/o/videos%2F5.mp4?alt=media&token=d093987b-d1a1-40b7-b1eb-ed48cdd17296',
    }
  ]

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
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private angularFirestore: AngularFirestore,
    private dialog: MatDialog
  ) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
    });
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
    this.http.get("https://api.ipregistry.co/?key=tryout", {}).subscribe((resp: any) => {
      const findMe = Object.keys(CountryISO)[Object.values(CountryISO as any).indexOf(resp.location.country.code.toLowerCase())];
      console.log(findMe);
      this.selectedCountry = CountryISO[findMe];
    });
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

  sendRegistrationData() {
    const contactForm = this.form.value;
    const email = contactForm.email;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });


    const message: FormMessage = {
      name: contactForm.name,
      replyTo: 'yogisforpeace1008@gmail.com',
      message: contactForm.description ?? null,
      phone: contactForm.phone,
      emailAddress: email,
      from: 'Ahimsa',
      date: +new Date(),
      isChecked: false
    };
    this.angularFirestore.collection('users').add(message).then(
      res => {
        console.log("this.angularFirestore.collection('users').add(message)  ", res);
        this.isSendRegistrationMessage = true;
        const dialogRef = this.dialog.open(DownloadAhimsaComponent, {
          width: '60vw',
          maxHeight: "800px",
          minHeight: "400px",
        });
      }
    )
    this.http
      .post(
        'https://formspree.io/f/mnqrjklr',
        message,
        { headers: headers }
      )
      .subscribe((response) => {
        console.log(response);
      });
    this.form.reset();
  }

  // sendRegistration() {
  //   return;
  //   const form = this.form.value;
  //   console.log('sendRegistrationData');
  //   this.http
  //     .post(
  //       this.url + 'crm.deal.list',
  //       {}
  //     )
  //     .subscribe((dealListResponse: any) => {
  //       let dealListTotal = dealListResponse.total;
  //       this.http
  //         .post(
  //           this.url + 'crm.contact.list',
  //           {
  //             filter: { "EMAIL": form.email },
  //             select: ["ID", "NAME", "LAST_NAME"]
  //           },
  //         )
  //         .subscribe((contactListResponse: any) => {
  //           console.log('contactListResponse ', contactListResponse);
  //           if (contactListResponse.result.length) {
  //             this.useContact(contactListResponse.result[0], dealListTotal);
  //           } else {
  //             this.addContact(dealListTotal);
  //           }
  //         });
  //     });
  // }

  useContact(contact, dealListTotal) {
    this.addDeal(contact.ID, dealListTotal);
  }

  addContact(dealListTotal) {
    const form = this.form.value;
    this.http
      .post(
        this.url + 'crm.contact.add',
        {
          fields: {
            "NAME": form.name,
            PHONE: [{ VALUE: form.phone, VALUE_TYPE: "WORK" }],
            EMAIL: [{ VALUE: form.email, VALUE_TYPE: "HOME" }],
            UTM_CAMPAIGN: this.routeParams?.utm_campaign,
            UTM_MEDIUM: this.routeParams?.utm_medium,
            UTM_SOURCE: this.routeParams?.utm_source,
            UTM_TERM: this.routeParams?.utm_term,
          },
        }
      )
      .subscribe((contact: any) => {
        console.log(contact);
        this.addDeal(contact.result, dealListTotal);
      });
  }

  addDeal(contactId, dealListTotal) {
    this.http
      .post(
        this.url + 'crm.deal.list',
        {
          filter: { "CONTACT_ID": contactId, "SOURCE_DESCRIPTION": "Форум Ахимса и Гармония" },
          select: ["ID", "TITLE", "SOURCE"]
        },
      )
      .subscribe((dealListResponse: any) => {
        console.log('dealListResponse ', dealListResponse);
        if (dealListResponse.result.length) {
          alert("Вы уже зарегестрировались")
        } else {
          this.http
            .post(
              this.url + 'crm.deal.add',
              {
                fields: {
                  TITLE: `Заявка номер ${dealListTotal + 1}`,
                  CONTACT_ID: contactId,
                  STATUS: 'NEW',
                  OPENED: 'Y',
                  HAS_PHONE: 'Y',
                  HAS_EMAIL: 'Y',
                  STATUS_ID: 'NEW',
                  STATUS_DESCRIPTION: 'Новый',
                  SOURCE_ID: 'CALL',
                  SOURCE_DESCRIPTION: "Форум Ахимса и Гармония",
                  SOURCE: "Форум Ахимса и Гармония",
                  UTM_CAMPAIGN: this.routeParams?.utm_campaign,
                  UTM_MEDIUM: this.routeParams?.utm_medium,
                  UTM_SOURCE: this.routeParams?.utm_source,
                  UTM_TERM: this.routeParams?.utm_term,

                },
              }
            )
            .subscribe((res) => {
              console.log(res);
              // this.router.navigate['/','thanks'];
              this.router.navigateByUrl('/thanks');
            });
        }
      });
  }
}
