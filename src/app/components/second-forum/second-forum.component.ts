import { Component, HostListener, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { emailValidator } from 'src/app/services/validation.service';
import { FormMessage } from '../main-page/main-page.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Languages } from 'src/app/app.component';
import { TranslateService } from '@ngx-translate/core';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';
declare var ssDeepLink;
@Component({
  selector: 'app-second-forum',
  templateUrl: './second-forum.component.html',
  styleUrls: ['./second-forum.component.scss']
})

export class SecondForumComponent implements OnInit {
  url = "https://vosd.bitrix24.eu/rest/4/idujiuxkvouf7pb9/";
  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    let header = document.querySelector('.head_wrap')
    if (window.pageYOffset > 0) {
      header.classList.add('bg_for_header')
    } else header.classList.remove('bg_for_header')
  }
  form: FormGroup;
  routeParams;
  menu: boolean = true;
  firstDateImgSrc: string;
  secondDateImgSrc: string;
  hoursImg: string;
  mastersImg: string;
  ahimsaImg: string;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  selectedCountry = CountryISO["CzechRepublic"];
  lan: string = 'ru';
  constructor(
    private _location: Location,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private angularFirestore: AngularFirestore,
    private translateService: TranslateService
  ) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [emailValidator()]),
      phone: new FormControl('', [Validators.required]),
    });
    let language = window.localStorage.getItem("language");
    if (language) {
      this.setLanguage(language);
    } else {
      this.setLanguage(this.lan);
    }
  }

  ngOnInit(): void {
    this.addScriptsToHead();
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params);
      this.routeParams = params;
    });
    setTimeout(() => {
      const getUrlParam = function (param) {
        if (!param) return null;
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const paramValue = urlParams.get(param);
        return paramValue;
      };
      const ssContext = {
        variables: {
          utm_source: getUrlParam('utm_source'), // получит параметр "utm_source" из ссылки
          utm_medium: getUrlParam('utm_medium'), // получит параметр "utm_medium" из ссылки
          utm_campaign: getUrlParam('utm_campaign'), // получит параметр "utm_campaign" из ссылки
          utm_content: getUrlParam('utm_content'), // получит параметр "utm_content" из ссылки
          W_chanel: getUrlParam('W_chanel'), // получит параметр "W_chanel" из ссылки
        }
      };
      console.log(ssContext);
      ssDeepLink('ss-btn', 'yogiespeas', false, ssContext);
    }, 10000);

  }

  goBack() {
    this._location.back();
  }

  sendRegistrationData() {
    const form = this.form.value;
    console.log('sendRegistrationData', form.phone);
    const message: FormMessage = {
      name: form.name,
      replyTo: 'yogisforpeace1008@gmail.com',
      message: form.description ?? null,
      phone: form.phone.e164Number,
      emailAddress: form.email,
      from: 'Forum',
      date: +new Date(),
      isChecked: false
    };
    this.angularFirestore.collection('users').add(message).then(
      res => console.log("this.angularFirestore.collection('users').add(message)  ", res)
    )
    this.http
      .post(
        this.url + 'crm.deal.list',
        {}
      )
      .subscribe((dealListResponse: any) => {
        console.log('dealListResponse ', dealListResponse);
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
            "FROM": this.lan == 'ru' ? "Форум Ахимса Ру" : "Форум Ахимса Англ",
            PHONE: [{ VALUE: form.phone.e164Number, VALUE_TYPE: "WORK" }],
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
          filter: { "CONTACT_ID": contactId, "SOURCE_DESCRIPTION": this.lan == 'ru' ? "Форум Ахимса Ру" : "Форум Ахимса Англ", },
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
                  SOURCE_DESCRIPTION: this.lan == 'ru' ? "Форум Ахимса Ру" : "Форум Ахимса Англ",
                  SOURCE: this.lan == 'ru' ? "Форум Ахимса Ру" : "Форум Ахимса Англ",
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
    if (id == 'forum-program' || id == 'div-about-forum' || id == 'registration-form-container') {
      yOffset = -150;
    } else {
      yOffset = -300;
    }
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  setLanguage(language) {
    this.lan = language;
    window.localStorage.setItem("language", this.lan);
    switch (language) {
      case Languages.English:
        this.firstDateImgSrc = 'assets/Images/7en.png';
        this.secondDateImgSrc = 'assets/Images/8en.png';
        this.mastersImg = 'assets/Images/masters.png';
        this.hoursImg = 'assets/Images/hours.png';
        this.ahimsaImg = 'assets/Images/logo_en.png'
        this.translateService.setDefaultLang(Languages.English);
        break;
      case Languages.Russian:
        this.firstDateImgSrc = 'assets/Images/7.png';
        this.secondDateImgSrc = 'assets/Images/8.png';
        this.mastersImg = 'assets/Images/16.png';
        this.hoursImg = 'assets/Images/12.png';
        this.ahimsaImg = 'assets/Icons/logo_gold.png'
        this.translateService.setDefaultLang(Languages.Russian);
        break;
      case Languages.Ukrainian:
        this.firstDateImgSrc = 'assets/Images/7.png';
        this.secondDateImgSrc = 'assets/Images/8.png';
        this.mastersImg = 'assets/Images/16.png';
        this.hoursImg = 'assets/Images/12.png';
        this.ahimsaImg = 'assets/Icons/logo_gold.png'
        this.translateService.setDefaultLang(Languages.Ukrainian);
        break;
    }
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  telegramClick() {
    if (this.lan === 'ru') {
      this.goToLink('tg://resolve?start=ZGw6MTI0Mzk1&domain=yogiesforpeas_bot')
    } else {
      this.goToLink('https://t.me/yogiesforpeas_bot?start=ZGw6MTI0NjMy')
    }
  }

  addScriptsToHead() {
    const head1 = document.getElementsByTagName('head')[0];
    const script1 = document.createElement('noscript');
    script1.innerHTML = `<img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=626453055020322&ev=PageView&noscript=1"/>`;
    head1.insertBefore(script1, head1.firstChild);
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.innerHTML = `  !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '626453055020322');
    fbq('track', 'PageView');`;
    head.insertBefore(script, head.firstChild);
  }

  addScriptsToscript() {
    const head1 = document.getElementsByTagName('body')[0];
    const script1 = document.createElement('script');
    script1.innerHTML = `    const links = document.querySelectorAll('a');
    if( links ) {
        for( const link of links ) {
            if (
                link.href.includes("tg://resolve") ||
                link.href.includes("https://t.me/") ||
                link.href.includes("https://direct.smartsender.com/redirect") ||
                link.href.includes("viber://pa") ||
                link.href.includes("https://vk.com/app") ||
                link.href.includes("vk://vk.com/app") ||
                link.href.includes("https://m.me") ||
                link.href.includes("https://wa.me") ||
                link.href.includes("whatsapp://send")
            ) {
                link.classList.add('ss-btn');
            }
        }
    }`;
    head1.insertBefore(script1, head1.firstChild);
    const head = document.getElementsByTagName('body')[0];
    const script = document.createElement('script');
    script.innerHTML = `     const getUrlParam = function( param ) {
      if ( ! param ) return;
      const queryString = window.location.search;
      const urlParams = new URLSearchParams( queryString );
      const paramValue = urlParams.get(param);

      // console.log(paramValue);
      return paramValue;
    };
    // ssDeepLink params
    const ssContext = {
        variables: {
            utm_source: getUrlParam('utm_source'), // получит параметр "utm_source" из ссылки
            utm_medium: getUrlParam('utm_medium'), // получит параметр "utm_medium" из ссылки
            utm_campaign: getUrlParam('utm_campaign'), // получит параметр "utm_campaign" из ссылки
            utm_content: getUrlParam('utm_content'), // получит параметр "utm_content" из ссылки
            W_chanel: getUrlParam('W_chanel'), // получит параметр "W_chanel" из ссылки
        }
    };
    console.log(ssContext);
    ssDeepLink('ss-btn', 'yogiespeas', false, ssContext);`;
    head.insertBefore(script, head.firstChild);
  }
}
