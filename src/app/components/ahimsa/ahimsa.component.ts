import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { emailValidator, phoneValidator } from 'src/app/services/validation.service';

@Component({
  selector: 'app-ahimsa',
  templateUrl: './ahimsa.component.html',
  styleUrls: ['./ahimsa.component.scss']
})
export class AhimsaComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  url = "https://b24-ay5iam.bitrix24.eu/rest/4/95igs0uaxwczeh83/";
  routeParams;
  first: number = 0;
  middle: number = 1;
  last: number = 2;
  visible: boolean = false;
  play1: boolean = false;
  play2: boolean = false;
  play3: boolean = false;
  slides: any = [
    {
      index: 0,
      name: 'Юлиана',
      description: 'Так как я являюсь мамой, то передаю знание ахимсы (ненасилия) своему сыну, и это зарождает у ребенка Дхармичное видение мира, которое, конечно же, будет вести его по жизни правильным, благоприятным путем…',
      path: 'assets/videos/1.mp4',
    },
    {
      index: 1,
      name: 'Алекс',
      description: 'Врата, это то, на что можно опереться, например мы как в болоте и не можем выбраться, потом появляется тонкий лед, он крепнет и мы уже можем спокойно ходить не проваливаясь... Ахимса – это такой лед, на который мы можем опереться и больше не проваливаться.',
      path: 'assets/videos/2.MOV',
    },
    {
      index: 2,
      name: 'Александр',
      description: '«Что касается физиологических показателей – улучшилось давление, лучше переношу физические нагрузки, общие самочувствие стало легче... что касаемо эмоционального состояния – внутренняя агрессия, особенно беспричинная практически вообще ушла»',
      path: 'assets/videos/3.mp4',
    },
    {
      index: 3,
      name: 'Анандамайи',
      description: 'В каком мире мы хотим жить?! В мире где есть внутренне понимание единства, уважение, достоинства и священности жизни или в мире невежества, борьбы, нападения и защиты…',
      path: 'assets/videos/4.mp4',
    }
  ]

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [emailValidator()]),
      phone: new FormControl('', [Validators.required, phoneValidator()]),
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
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params);
      this.routeParams = params;
      // const userId = params['userId'];
      // console.log(userId);
    });
  }

  goToURl(url) {
    window.open(url);
  }

  next() {
    this.visible = true;
    setTimeout(() => {
      if (this.last < this.slides.length - 1) {
        this.first = this.first + 1;
        this.middle = this.middle + 1;
        this.last = this.last + 1;
      } else {
        this.first = 0;
        this.middle = 1;
        this.last = 2;
      }
    }, 200);
    setTimeout(() => {
      this.visible = false;
    }, 500);
  }

  previous() {
    this.visible = true;
    setTimeout(() => {
      if (this.first > 0) {
        this.first = this.first - 1;
        this.middle = this.middle - 1;
        this.last = this.last - 1;
      } else {
        this.first = this.slides.length - 3;
        this.middle = this.slides.length - 2;
        this.last = this.slides.length - 1;
      }
    }, 200);
    setTimeout(() => {
      this.visible = false;
    }, 500);
  }

  sendRegistrationData() {
    return;
    const form = this.form.value;
    console.log('sendRegistrationData');
    this.http
      .post(
        this.url + 'crm.deal.list',
        {}
      )
      .subscribe((dealListResponse: any) => {
        let dealListTotal = dealListResponse.total;
        this.http
          .post(
            this.url + 'crm.contact.list',
            {
              filter: { "EMAIL": form.email },
              select: ["ID", "NAME", "LAST_NAME"]
            },
          )
          .subscribe((contactListResponse: any) => {
            console.log('contactListResponse ', contactListResponse);
            if (contactListResponse.result.length) {
              this.useContact(contactListResponse.result[0], dealListTotal);
            } else {
              this.addContact(dealListTotal);
            }
          });
      });
  }

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
