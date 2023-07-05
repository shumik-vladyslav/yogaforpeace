import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tns } from "../../../../node_modules/tiny-slider/src/tiny-slider";
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';
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
export class CourseComponent implements OnInit, AfterViewInit {
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


  showMenu() {
    this.menu = true;
  }
}
