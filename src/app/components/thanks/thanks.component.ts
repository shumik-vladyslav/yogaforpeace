import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})

export class ThanksComponent implements OnInit {
  lan: string = 'ru';
  constructor() {
    let language = window.localStorage.getItem("language");
    if (language) {
      this.setLanguage(language);
    } else {
      this.setLanguage(this.lan);
    }
  }

  setLanguage(language) {
    window.localStorage.setItem("language", language);
    this.lan = language;
  }

  ngOnInit(): void {
    this.addScriptsToHead();
  }

  goToURl(url) {
    window.open(url);
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  telegramClick() {
    if (this.lan === 'ru') {
      this.goToLink('https://t.me/FORUM_AHIMSA')
    } else {
      this.goToLink('https://t.me/SekondForum_En')
    }
  }

  addScriptsToHead() {
    const head1 = document.getElementsByTagName('head')[0];
    const script1 = document.createElement('noscript');
    script1.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=626453055020322&ev=PageView&noscript=1" />`;
    head1.insertBefore(script1, head1.firstChild);
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.innerHTML = `!function(f,b,e,v,n,t,s)
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
}
