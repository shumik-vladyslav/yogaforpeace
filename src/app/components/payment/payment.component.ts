import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var JHash;
declare var Wayforpay;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, AfterViewInit {
  formAmount: FormGroup;
  md5_hmac;
  constructor(private http: HttpClient,
    private _renderer2: Renderer2, 
        @Inject(DOCUMENT) private _document: Document,
        private elementRef:ElementRef) { }

  ngOnInit(): void {
    this.formAmount = new FormGroup({
      amount: new FormControl(1, Validators.required),
      currency: new FormControl("USD", Validators.required)
    });

    
    this.http.get("https://auth.robokassa.ru/Merchant/PaymentForm/FormFLS.js?MerchantLogin=yogisforpeace&InvoiceID=0&Culture=ru&Encoding=utf-8&Description=&DefaultSum=0&shp_interface=field&SignatureValue=38979d36f6cd95a7bff7dfeb11f399ac").subscribe((data) => {
      console.log(data);
      
    })
  }

  ngAfterViewInit() {
    console.log(23);
    
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://auth.robokassa.ru/Merchant/PaymentForm/FormFLS.js?MerchantLogin=yogisforpeace&InvoiceID=0&Culture=ru&Encoding=utf-8&Description=&DefaultSum=0&shp_interface=field&SignatureValue=38979d36f6cd95a7bff7dfeb11f399ac";
    this.elementRef.nativeElement.appendChild(s);



  }

  submitForm() {
    console.log(this.formAmount);
    this.sendGetRequest();
  }

  getId(params) {
    const url = 'https://wiki.wayforpay.com/wiki/default/generate-hmac';
    return this.http.get(url, { params });
  }

  sendGetRequest() {
    let order = Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    let string = `yogisforpeace_life;https://yogisforpeace.life/payment;${order};14153798632;${this.formAmount.get('amount').value};${this.formAmount.get('currency').value};Намасте;1;1000`

    this.md5_hmac = JHash.hex_hmac_md5("b4444121b00943e695a963a69b8c7732869f7b6a", string);
    console.log(this.md5_hmac);

    var wayforpay = new Wayforpay();
    wayforpay.run({
      merchantAccount: "yogisforpeace_life",
      merchantDomainName: "https://yogisforpeace.life/payment",
      authorizationType: "SimpleSignature",
      merchantSignature: this.md5_hmac,
      orderReference: order,
      orderDate: "14153798632",
      amount: this.formAmount.get('amount').value,
      currency: this.formAmount.get('currency').value,
      productName: "Намасте",
      productPrice: "1000",
      productCount: "1",
      // clientFirstName : "Вася", 		
      // 		clientLastName : "Васечкин", 			
      //     	clientEmail : "some@mail.com", 			
      //       	clientPhone: "380631234567", 			
      //         	language: "UA" 		
    },
      function (response) {// on approved				 	
      }, function (response) {// on declined 
      }, function (response) {// on pending or in processing 	
      })
  }

  addScriptsToHead() {
    const head1 = document.getElementsByTagName('head')[0];
    const script1 = document.createElement('noscript');
    script1.innerHTML = `<img height="1" width="1" style="display:none"src="https://www.facebook.com/tr?id=626453055020322&ev=PageView&noscript=1"/>`;
    head1.insertBefore(script1, head1.firstChild);
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.innerHTML = `  !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefor(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '626453055020322');fbq('track', 'PageView');`;
    head.insertBefore(script, head.firstChild);
  }
}

