import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thankyou-page',
  templateUrl: './thankyou-page.component.html',
  styleUrls: ['./thankyou-page.component.scss']
})
export class ThankyouPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.load()
  }


  goToLink(url: string){
    window.open(url, "_blank");
  }


  load() {
    (function (f: any, b, e, v, n, t, s) {
        if (f.fbq) return; n = f.fbq = function () {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        }; if (!f._fbq) f._fbq = n;
        n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0;
        t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s)
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    (window as any).fbq.disablePushState = true; //not recommended, but can be done
    (window as any).fbq('init', '626453055020322');
    (window as any).fbq('track', 'PageView');
    console.log('Facebook pixel init run!')
}
    // (window as any).fbq('track', 'PageView');
}
