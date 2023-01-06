import { Component, OnInit } from '@angular/core';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-thankyou-page',
  templateUrl: './thankyou-page.component.html',
  styleUrls: ['./thankyou-page.component.scss']
})
export class ThankyouPageComponent implements OnInit {

  constructor(
    private generalService: GeneralServiceService) {
    this.generalService.currentLanguage.subscribe(lan => {
      this.setLanguage(lan)
    })
  }
  lan
  setLanguage(language) {
    window.localStorage.setItem("language", language);

    this.lan = language;
  }
  ngOnInit(): void {
    this.addScriptsToHead()
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

  telegramClick() {
    if(this.lan === 'ru') {
      this.goToLink('https://t.me/FORUM_AHIMSA')
    } else {
      this.goToLink('https://t.me/SekondForum_En')

    }
  }


  load() {
    // (function (f: any, b, e, v, n, t, s) {
    //     if (f.fbq) return; n = f.fbq = function () {
    //         n.callMethod ?
    //             n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    //     }; if (!f._fbq) f._fbq = n;
    //     n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0;
    //     t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s)
    // })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    // (window as any).fbq.disablePushState = true; //not recommended, but can be done
    // (window as any).fbq('init', '626453055020322');
    // (window as any).fbq('track', 'PageView');
  //   (function() {
  //     var _fbq = (window as any)._fbq || ((window as any)._fbq = []);
  //     if (!_fbq.loaded) {
  //         var fbds = document.createElement('script');
  //         fbds.async = true;
  //         fbds.src = '//connect.facebook.net/en_US/fbds.js';
  //         var s = document.getElementsByTagName('script')[0];
  //         s.parentNode.insertBefore(fbds, s);
  //         _fbq.loaded = true;
  //     }
  //     _fbq.push(['init', '626453055020322']);
  //     _fbq.push(['track', 'PageView']);
  // })();

//   (function (f: any, b, e, v, n, t, s) {
//     if (f.fbq) return; n = f.fbq = function () {
//         n.callMethod ?
//             n.callMethod.apply(n, arguments) : n.queue.push(arguments)
//     }; if (!f._fbq) f._fbq = n;
//     n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0;
//     t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s)
// })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
// (window as any).fbq.disablePushState = true; //not recommended, but can be done
// (window as any).fbq('init', '626453055020322');
// (window as any).fbq('track', 'PageView');
    console.log('Facebook pixel init run!')
}

addScriptsToHead() {


  const head1 = document.getElementsByTagName('head')[0];


  const script1 = document.createElement('noscript');
  script1.innerHTML = `<img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=626453055020322&ev=PageView&noscript=1"
/>`;

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
  fbq('track', 'Lead');`;

  head.insertBefore(script, head.firstChild);
}
    // (window as any).fbq('track', 'PageView');
}
