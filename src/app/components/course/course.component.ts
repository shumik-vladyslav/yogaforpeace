import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tns } from "../../../../node_modules/tiny-slider/src/tiny-slider";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';
import { FormMessage } from '../main-page/main-page.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  hasExpand = {};
  menu: boolean = false;
  form: FormGroup;
  url = "https://vosd.bitrix24.eu/rest/4/idujiuxkvouf7pb9/";
  isSendRegistrationMessage: boolean = false;
  lan: string = 'ru';
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  SearchCountryField = SearchCountryField;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  selectedCountry = CountryISO["CzechRepublic"];
  routeParams;
  constructor(
    private http: HttpClient,
    private angularFirestore: AngularFirestore,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params);
      this.routeParams = params;
      // const userId = params['userId'];
      // console.log(userId);
    });
  }

  expand(idx: number) {
    this.hasExpand[idx] = !this.hasExpand[idx];
  }

  goToURl(url) {
    window.open(url);
  }

  scrollTo(id): void {
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  ngAfterViewInit() {
    tns({
      "container": '.my-slider',
      "items": 5,
      "arrowKeys": true,
      "swipeAngle": false,
      "speed": 400
    });
  }

  sendRegistration() {
    const contactForm = this.form.value;
    const email = contactForm.email;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const message: FormMessage = {
      name: contactForm.name,
      replyTo: 'yogisforpeace1008@gmail.com',
      message: contactForm.description ?? null,
      phone: contactForm.phone.e164Number,
      emailAddress: email,
      from: 'Ahimsa',
      date: +new Date(),
      isChecked: false
    };
    // this.angularFirestore.collection('users').add(message).then(
    //   res => {
    //     console.log("this.angularFirestore.collection('users').add(message)  ", res);
    //     this.isSendRegistrationMessage = true;
    //     const dialogRef = this.dialog.open(DownloadAhimsaComponent, {
    //       width: '60vw',
    //       maxHeight: "800px",
    //       minHeight: "400px",
    //     });
    //   }
    // )
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

  sendRegistrationData() {
    const form = this.form.value;
    const email = form.email;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });


    const message: FormMessage = {
      name: form.name,
      replyTo: 'yogisforpeace1008@gmail.com',
      message: form.description ?? null,
      phone: form.phone,
      emailAddress: email,
      from: 'Ahimsa',
      date: +new Date(),
      isChecked: false
    };
    this.angularFirestore.collection('users').add(message).then(
      res => {

        this.isSendRegistrationMessage = true;
      })

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

  addContact(dealListTotal) {
    const form = this.form.value;
    this.http
      .post(
        this.url + 'crm.contact.add',
        {
          fields: {
            "NAME": form.name,
            "FROM": this.lan == 'ru' ? "forum_ru" : "forum_en",
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

  useContact(contact, dealListTotal) {
    this.addDeal(contact.ID, dealListTotal);
  }

  addDeal(contactId, dealListTotal) {
    this.http
      .post(
        this.url + 'crm.deal.list',
        {
          filter: { "CONTACT_ID": contactId, "SOURCE_DESCRIPTION": this.lan == 'ru' ? "YFP_Ritual_Ahimsa_Ru" : "YFP_Ritual_Ahimsa_En" },
          select: ["ID", "TITLE", "SOURCE"]
        },
      )
      .subscribe((dealListResponse: any) => {
        console.log('dealListResponse ', dealListResponse);
        if (dealListResponse.result.length) {
          alert(this.lan == 'ru' ? "Вы уже зарегестрировались" : "You are already registered")
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
                  SOURCE_DESCRIPTION: this.lan == 'ru' ? "YFP_Ritual_Ahimsa_Ru" : "YFP_Ritual_Ahimsa_En",
                  SOURCE: this.lan == 'ru' ? "YFP_Ritual_Ahimsa_Ru" : "YFP_Ritual_Ahimsa_En",
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
              this.router.navigateByUrl('/thanks-ahimsa');
            });
        }
      });
  }

  showMenu() {
    this.menu = true;
  }
}
