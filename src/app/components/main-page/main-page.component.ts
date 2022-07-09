import { AUTO_STYLE } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NewsPageComponent } from '../news-page/news-page.component';
import { switchMap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private http: HttpClient,
    private route: ActivatedRoute,
    private translateService: TranslateService,
    private generalService: GeneralServiceService
  ) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl(''),
      phone: new FormControl(''),
      description: new FormControl(''),
    });
    generalService.currentLanguage.subscribe(res => {
      this.language = res;
      if(this.language == 'en'){
        this.shantiSrc = 'https://www.youtube.com/embed/1sgG98jCq_g';
        this.ahimsaSrc = 'https://www.youtube.com/embed/3diYSam4ZcU';
      }
    })
    // console.log("browserLang",browserLang);

  }
  form: FormGroup;
  language;
  shantiSrc = '//youtube.com/embed/Em-y_bkTQYk?rel=0&fmt=18&html5=1&showinfo=0';
  ahimsaSrc = 'https://www.youtube.com/embed/nOubh8giCgM';
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
      imgUrl: '../../../assets/Images/Original/maxresdefault_2.jpg',
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
      imgUrl: '../../../assets/Images/Original/maxresdefault_1.jpg',
    },
    {
      title: 'Конференция "Йоги за мир" с Шанкарой (Павел Калягин)',
      subTitle:
        'Конференция "Йоги за мир" с Шанкарой (Павел Калягин), традиция Шивананды, Прага –Ньйю-йорк',
      date: '06.04.2022',
      text: ``,
      imgUrl: '../../../assets/Images/Original/maxresdefault.jpg',
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
      imgUrl: '../../../assets/Images/Original/mq2.jpg',
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
      imgUrl: '../../../assets/Images/Original/1886362-vse-o-mantre.jpg',
    },
  ];
  ngOnInit(): void {
    this.news = null;
    // console.log(this.route.snapshot.params['type']);

  }

  navigateDownload() {
    window.open(
      'https://drive.google.com/drive/folders/1TakOt6LnWfh73evy4aKOh7DrUsjJMflD',
      '_blank'
    );
  }
  sendMail() {
    const contactForm = this.form.value;
    const email = contactForm.email;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http
      .post(
        'https://formspree.io/f/xnqwrqzj',
        {
          name: contactForm.name,
          replyto: 'yogisforpeace1008@gmail.com',
          message: contactForm.description,
          phone: contactForm.phone,
          emailAddress: email
        },
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
    const dialogRef = this.dialog.open(NewsPageComponent, {
      width: '80vw',
      maxHeight: AUTO_STYLE,
      data: { dialog: true, new: e },
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }
  navigateVideo() {
    window.open('https://youtu.be/-AzXLZUNfiQ', '_blank');
  }
}
export interface News {
  title: string;
  subTitle: string;
  date: string;
  text: string;
  imgUrl: string;
}

