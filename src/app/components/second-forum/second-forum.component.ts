import { Component, HostListener, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import BX24 from 'bx24-api';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { emailValidator, phoneValidator } from 'src/app/services/validation.service';
import { FormMessage } from '../main-page/main-page.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-second-forum',
  templateUrl: './second-forum.component.html',
  styleUrls: ['./second-forum.component.scss']
})

export class SecondForumComponent implements OnInit {
  url = "https://b24-ay5iam.bitrix24.eu/rest/4/95igs0uaxwczeh83/";
  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    let header = document.querySelector('.head_wrap')
    if (window.pageYOffset > 0) {
      header.classList.add('bg_for_header')
    } else header.classList.remove('bg_for_header')
  }

  form: FormGroup;
  routeParams;

  constructor(
    private _location: Location,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private angularFirestore: AngularFirestore
  ) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [emailValidator()]),
      phone: new FormControl('', [Validators.required, phoneValidator()]),
    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params);
      this.routeParams = params;
    });
  }

  goBack() {
    this._location.back();
  }

  sendRegistrationData() {
    const form = this.form.value;
    console.log('sendRegistrationData');
    const message: FormMessage = {
      name: form.name,
      replyTo: 'yogisforpeace1008@gmail.com',
      message: form.description ?? null,
      phone: form.phone,
      emailAddress: form.email,
      from: 'Forum',
      date: +new Date(),
      isChecked: false
    };
    this.angularFirestore.collection('users').add(message).then(
      res => console.log("this.angularFirestore.collection('users').add(message)  ",res)
    )
    this.http
      .post(
        this.url + 'crm.deal.list',
        {}
      )
      .subscribe((dealListResponse: any) => {
        console.log('dealListResponse ' , dealListResponse);
        let dealListTotal = dealListResponse.total;
        this.http
        .post(
          this.url + 'crm.contact.list',
          {
            filter: { "EMAIL": form.email },
            select: [ "ID", "NAME", "LAST_NAME" ]
        },
        )
        .subscribe((contactListResponse: any) => {
          console.log('contactListResponse ', contactListResponse);

          if(contactListResponse.result.length) {
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
        select: [ "ID", "TITLE", "SOURCE" ]
    },
    )
    .subscribe((dealListResponse: any) => {
      console.log('dealListResponse ', dealListResponse);
      if(dealListResponse.result.length) {
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

  goToURl(url) {
    window.open(url);
  }

  scrollTo(id): void {
    console.log(id);
    let yOffset;
    if (id == 'forum-program' || id == 'div-about-forum') {
      yOffset = -150;
    } else {
      yOffset = -300;
    }
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
