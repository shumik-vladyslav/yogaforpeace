import { AUTO_STYLE } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NewsPageComponent } from '../news-page/news-page.component';
import { TranslateService } from '@ngx-translate/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Languages } from 'src/app/app.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    let header = document.querySelector('.head_wrap')
    if (window.pageYOffset > 0) {
      header.classList.add('bg_for_header')
    } else header.classList.remove('bg_for_header')
  }
  lan: string = 'ru';

  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    private translateService: TranslateService,
    private angularFirestore: AngularFirestore,
  ) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl(''),
      phone: new FormControl(''),
      description: new FormControl(''),
    });
    let language = window.localStorage.getItem("language");
    if (language) {
      this.setLanguage(language);
    } else {
      this.setLanguage(this.lan);
    }
  }

  form: FormGroup;
  shantiSrc = '//youtube.com/embed/Em-y_bkTQYk?rel=0&fmt=18&html5=1&showinfo=0';
  ahimsaSrc = 'https://www.youtube.com/embed/nOubh8giCgM';
  materialsUrl = 'https://drive.google.com/drive/folders/10XCW0lPJgox8d5khUZIBnyAocQ-RQI4H?usp=sharing';
  news: News[] = [
    {
      title: 'Конференция "Йоги За Мир"',
      subTitle: '',
      date: '17.04.2022',
      text: 'Вопросы: Взгляд на происходящее участников Философия ненасилия (Ахимса) Рекомендации от участников как практиковать медитацию любви.',
      imgUrl: '../../../assets/Images/Original/mq2.jpg',
    },
    {
      title:
        'О современном монашестве. Интервью Татьяны Жеребцовой с монахиней Махешвари Гири',
      subTitle: '"Кто такие и как живут современные монахи?"',
      date: '15.04.2022',
      text: `"Кто такие и как живут современные монахи?"
      Вопросы задает — Татьяна Жеребцова, автор метода Матрицы Целостной Судьбы.
      Отвечает — ученица Свами Вишнудевананда Гири, монахини ведической традиции Махешвари Гири, пурнасанньяси индийского монашеского ордена Джуна Акхары.

      Движение «Йоги за мир» — это неполитическое, некоммерческое, сетевое международное общественное движение, ставящее перед собой цель объединить всех, кто практикует йогу и Санатана Дхарму в той или иной форме, ради утверждения принципа Шанти — мира, покоя, любви и гармонии на всей Земле.

      Приглашаем всех присоединяться к медитации и молитве за МИР!
      yogisforpeace.life

      Информационные каналы:
      https://t.me/yogisforpeace_life
      https://www.instagram.com/yogis.for.peace/
      https://vk.com/yogisforpeace
      https://www.facebook.com/worldyogisforpeace/
      https://www.youtube.com/channel/UCwVmdAPm5T9tTHNd2W-v-FQ
      Чат подсчета проведенных медитаций:
      t.me/yogisforpeace

      Татьяна Жеребцова:
      Сайт: https://татьянажеребцова.рф/
      ВКонтакте: https://vk.com/mrosta
      Телеграм: https://t.me/tzherebtsova
      Ютуб: https://www.youtube.com/c/%D0%92%D0%AB%D0%A5%D0%9E%D0%94%D0%B8%D0%B7%D0%9C%D0%90%D0%A2%D0%A0%D0%98%D0%A6%D0%AB
      Инстаграм: https://www.instagram.com/numerolog.zherebtsova/

      Лока Самаста Сукхино Бхаванту
      Ом Шанти

      #йогизамир #yogisforpeace #йоги #yogis #yogisforlife #мирумир #замир #шанти #омшанти #йогибхаджан #yogilife #обетахимсы #йога #йогавезде #йогапрактика #йогаонлайн #йогаобучение #йогадлявсех #духовность #духовныепрактики #духовнаяжизнь #духовныйпуть #духовныймир #духовныйучитель #духовныйнаставник #духовныйпоиск #духовныйпрактик #добро #мир #нетвойне #любовь #монашество #дхарма`,
      imgUrl: 'https://firebasestorage.googleapis.com/v0/b/yogisforpeace-84027.appspot.com/o/images%2Fmaxresdefault_2.jpg?alt=media&token=1ab961a8-7248-492e-8342-80e4c1570293',
    },
    {
      title:
        'Интервью "Йоги за мир". Пурна-санньяси Адимата с Татьяной Жеребцовой.',
      subTitle: '',
      date: '12.04.2022',
      text: `Ом, намасте! Прошло интервью монахини Адиматы Гири @adimatagiri с Татьяной Жеребцовой, автором метода Матрица Целостной Судьбы.
      Ниже публикуются Активации, о которых обсуждалось в видео.
      Контакты Татьяны: @numerolog.zherebtsova, сайт: татьянажеребцова.рф

      Активация БЛИЖЕ К БОГУ

      Когда тебя предал твой лучший друг
      И больно так, что нету сил кричать,
      Но все же, оклемавшись понемногу,
      Ты выбираешь не винить -прощать.
      Ты ближе к Богу.

      Когда твердят тебе: да, брось, забудь!
      Вот верная, надежная дорога…
      Но стиснув зубы, ты идёшь вперёд
      Прокладывая новый путь
      для многих,
      Ты ближе к Богу.

      Когда выходит из под ног Земля,
      И рушится все то, что строил годы,
      Не унывай, а верь, что все- не зря!
      И step by step
      С нуля,
      Все ближе к Богу!

      Татьяна Жеребцова ©`,
      imgUrl: 'https://firebasestorage.googleapis.com/v0/b/yogisforpeace-84027.appspot.com/o/images%2Fmaxresdefault_1.jpg?alt=media&token=2e74307b-1129-4c6e-b337-189f31c6e388',
    },
    {
      title: 'Конференция "Йоги за мир" с Шанкарой (Павел Калягин)',
      subTitle:
        'Конференция "Йоги за мир" с Шанкарой (Павел Калягин), традиция Шивананды, Прага –Ньйю-йорк',
      date: '06.04.2022',
      text: ``,
      imgUrl: 'https://firebasestorage.googleapis.com/v0/b/yogisforpeace-84027.appspot.com/o/images%2Fmaxresdefault.jpg?alt=media&token=6a0796dd-3d3c-43a8-be4f-504e58fdd1ba',
    },
    {
      title: 'Встреча с обществом Рерихов',
      subTitle:
        'Прошла первая международная онлайн-конференция вместе с группой учеников Н.Рериха из Молдовы.',
      date: '23.03.2022',
      text: `Мы послушали воодушевляющие песни, поделились выдержками о мире из священных текстов, и, конечно, завершили коллективной Умиротворяющей практикой Шанти-кармы.
      Вместе мы пришли в очередной раз к выводу, что идеи мира, добра и любви одинаковы для всех верований.
      Надеемся, что такие конференции будут проводиться чаще и больше, чтобы объединить как можно людей во благо Мира на Земле.`,
      imgUrl: '../../../assets/Images/Original/photo_2022-03-23_200.jpeg',
    },
    {
      title: 'Акханда-Шанти-карма-садхана',
      subTitle:
        '27 марта 12.00-18.00 состоится непрерывная 6-часовая умиротворяющая практика с монахами.',
      date: '23.03.2022',
      text: `Мы послушали воодушевляющие песни, поделились выдержками о мире из священных текстов, и, конечно, завершили коллективной Умиротворяющей практикой Шанти-кармы.
      Вместе мы пришли в очередной раз к выводу, что идеи мира, добра и любви одинаковы для всех верований.
      Надеемся, что такие конференции будут проводиться чаще и больше, чтобы объединить как можно людей во благо Мира на Земле.`,
      imgUrl: 'https://firebasestorage.googleapis.com/v0/b/yogisforpeace-84027.appspot.com/o/images%2Fmq2.jpg?alt=media&token=8676379f-865d-4997-b37d-d000d6061713',
    },
    {
      title: 'День счастья',
      subTitle: `Что такое Международный день счастья? Естественно, это день, когда нужно быть счастливым!`,
      date: '23.03.2022',
      text: `В 2012 году ООН своей резолюцией провозгласила 20 марта Международным днем счастья (International Day of Happiness) с целью признать важность счастья в жизни каждого человека и поддержать идею о том, что стремление к счастью является общим чувством для всех людей нашей планеты.

      Также, по мнению учредителей Дня, сегодняшний праздник призван показать, что счастье является одной из основных целей человечества.

      В связи с этим учредители призывают все страны направить усилия на улучшение благосостояния каждого человека.
      ООН предлагает всем государствам-членам, международным и региональным организациям, а также гражданскому обществу, включая неправительственные организации и частных лиц, отмечать Международный день счастья соответствующим образом, в том числе путем проведения просветительских и тематических мероприятий.

      Интересно, что инициатива учреждения Международного дня счастья поступила из небольшой горной страны — Бутана (Bhutan). Считается, что жители Королевства Бутан являются самыми счастливыми людьми в мире — чемпионами по коэффициенту Валового Национального Счастья (Gross National Happiness Index), которым измеряется национальное благосостояние граждан.

      Кстати, само понятие коэффициента Валового Национального Счастья было введено и культивировано четвертым королем Бутана и стало одним из понятий неофициальной государственной философии страны.
      Также для отражения благосостояния людей и состояния окружающей среды в разных странах мира в июле 2006 года был введен Международный индекс счастья (Happy Planet Index).

      *Информация из открытых источников`,
      imgUrl: 'https://firebasestorage.googleapis.com/v0/b/yogisforpeace-84027.appspot.com/o/images%2F1886362-vse-o-mantre.jpg?alt=media&token=d1ffa158-12c7-4463-9d94-a8b24503a8f7',
    },
  ];

  ngOnInit(): void {
    this.news = null;
    // console.log(this.route.snapshot.params['type']);
    window.scroll(0, 0);
    this.addScriptsToHead()
  }

  navigateDownload() {
    window.open(
      this.materialsUrl,
      '_blank'
    );
  }

  scrollTo(id): void {
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  setMaterials() {
    if (this.lan == 'en') {
      this.shantiSrc = 'https://www.youtube.com/embed/1sgG98jCq_g';
      this.ahimsaSrc = 'https://www.youtube.com/embed/3diYSam4ZcU';
      this.materialsUrl = 'https://drive.google.com/drive/folders/1Wt4YivmJzVC6Y4n048GMZ900p1FdczPa?usp=share_link';
    } else if (this.lan == 'ru' || this.lan == 'ua') {
      this.materialsUrl = 'https://drive.google.com/drive/folders/10XCW0lPJgox8d5khUZIBnyAocQ-RQI4H?usp=sharing';
    }
  }

  setLanguage(language) {
    window.localStorage.setItem("language", language);
    this.lan = language;
    this.setMaterials();
    switch (language) {
      case Languages.English:
        this.translateService.setDefaultLang(Languages.English);
        break;
      case Languages.Russian:
        this.translateService.setDefaultLang(Languages.Russian);
        break;
      case Languages.Ukrainian:
        this.translateService.setDefaultLang(Languages.Ukrainian);
        break;
    }
  }

  sendMail() {
    const contactForm = this.form.value;
    const email = contactForm.email;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const message: FormMessage = {
      name: contactForm.name,
      replyTo: 'yogisforpeace1008@gmail.com',
      message: contactForm.description,
      phone: contactForm.phone,
      emailAddress: email,
      from: 'YogisForPeace',
      date: +new Date(),
      isChecked: false
    };
    this.angularFirestore.collection('users').add(message).then(
      res => console.log("this.angularFirestore.collection('users').add(message)  ", res)
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
  formG() {
    console.log(this.form);
  }
  openDialog(e) {
    this.dialog.open(NewsPageComponent, {
      width: '80vw',
      maxHeight: AUTO_STYLE,
      data: { dialog: true, new: e },
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
  navigateVideo() {
    window.open('https://youtu.be/-AzXLZUNfiQ', '_blank');
  }
  goToURl(url) {
    window.open(url);
  }


  addScriptsToHead() {
    const head1 = document.getElementsByTagName('head')[0];
    const script1 = document.createElement('noscript');
    script1.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=626453055020322&ev=PageView&noscript=1" />`;
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
}
export interface News {
  title: string;
  subTitle: string;
  date: string;
  text: string;
  imgUrl: string;
}
export interface FormMessage {
  name: string;
  replyTo: string;
  message: string;
  phone: string;
  emailAddress: string;
  from: string;
  date: number,
  isChecked: boolean
}
