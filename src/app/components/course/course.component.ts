import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tns } from "../../../../node_modules/tiny-slider/src/tiny-slider";
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';
import { FormMessage } from '../main-page/main-page.component';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { VideoDialogComponent } from '../video-dialog/video-dialog.component';
// import { SwiperOptions } from 'swiper';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  hasExpand = {};
  menu: boolean = false;
  form: FormGroup;
  less: boolean = false;
  visible: number = 1;
  mobile: boolean = false;
  url = "https://vosd.bitrix24.eu/rest/4/idujiuxkvouf7pb9/";
  isSendRegistrationMessage: boolean = false;
  lan: string = 'ru';
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  SearchCountryField = SearchCountryField;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  selectedCountry = CountryISO["CzechRepublic"];
  routeParams;
  // mobExpanded: boolean = true;
  imgLoaded: boolean = false;
  // @HostListener('window:resize') onResize() {}
  // config: SwiperOptions = {
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev'
  //   },
  //   loop: true,
  //   spaceBetween: 30
  // };
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    public ngxService: NgxUiLoaderService
  ) {
    this.ngxService.startLoader('ahimsa');
    if (window.innerWidth <= 1000) {
      this.less = true;
    }
    if (window.innerWidth <= 700) {
      this.mobile = true;
    }
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
    });
  }

  mouseEnter(clas: string) {
    document.getElementById("rewiew-wrp" + clas).classList.add(clas);
  }

  mouseLeave(clas: string) {
    document.getElementById("rewiew-wrp" + clas).classList.remove(clas);
  }

  telegramRegister() {
    window.open(`https://tg.pulse.is/yogiesforpeas_bot?start=648054e04ec7d4580107e9da|Сегменты=YPF_Ahimsa_Course_Free|UTM_Source=${this.routeParams?.utm_source}|UTM_medium=${this.routeParams?.utm_medium}|UTM_campaign=${this.routeParams?.utm_campaign}`)
  }

  checkImgLoad() {
    this.imgLoaded = true;
    this.ngxService.stopLoader('ahimsa');
  }

  showVideo(url: string, tube?: boolean) {
    this.dialog.open(VideoDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: { url, tube },
      panelClass: "no-resize"
    });
  }

  toggleNextRewiews() {
    if (this.visible == 3) {
      this.visible = 1;
    } else {
      this.visible = this.visible + 1;
    }
  }

  togglePrevRewiews() {
    if (this.visible == 1) {
      this.visible = 3;
    } else {
      this.visible = this.visible - 1;
    }
  }

  ngOnInit(): void {
    // const script1 = document.createElement('no1script');
    // script1.innerHTML = `<script src="//web.webformscr.com/apps/fc3/build/loader.js" async sp-form-id="5a021b81ce135f80e6332d5cdb470194 d1377e5d7bdc31a2330840532f819428"></script>`;
    if (tns.length) {
      tns({
        "container": '.my-slider-mob',
        items: 3,
        "arrowKeys": true,
        "swipeAngle": false,
        "speed": 400
      });
      tns({
        "container": '.my-slider-mob-rewiews',
        items: 3,
        "arrowKeys": true,
        "swipeAngle": false,
        "speed": 400
      });
    }
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params);
      this.routeParams = params;
    });
  }

  expand(idx: number) {
    // if (window.innerWidth <= 660) {
    //   this.mobExpanded = !this.mobExpanded;
    // } else {
      this.hasExpand[idx] = !this.hasExpand[idx];
    // }
  }

  goToURl(url) {
    window.open(url);
  }

  scrollTo(id): void {
    this.menu = false;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  ngAfterViewInit() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.innerWidth <= 1000) {
      console.log('mobile');
    } else {
      tns({
        "container": '.my-slider',
        "items": 5,
        "arrowKeys": true,
        "swipeAngle": false,
        "speed": 400
      });
    }
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
    fbq('track', 'CompleteRegistration');`;
    head.insertBefore(script, head.firstChild);
  }

  submitForm() {}

  showMenu() {
    this.menu = true;
  }
}
