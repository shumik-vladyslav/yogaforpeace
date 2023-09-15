import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var JHash;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  formAmount: FormGroup;
  md5_hmac
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.formAmount = new FormGroup({
      amount: new FormControl(1, Validators.required),
      currency: new FormControl("USD", Validators.required)
    });


  }

  submitForm() {
    console.log(this.formAmount);
  }

  getId(params) {
    const url = 'https://wiki.wayforpay.com/wiki/default/generate-hmac';
    return this.http.get(url, { params });
  }
  
  sendGetRequest() {
    let string = `yogisforpeace_life;https://yogisforpeace.life/payment;DH783023;1415379863;${this.formAmount.get('amount').value};${this.formAmount.get('currency').value};Процессор Intel Core i5-4670 3.4GHz;Память Kingston DDR3-1600 4096MB PC3-12800;1;1;1000;547.36`

    this.md5_hmac = JHash.hex_hmac_md5("b4444121b00943e695a963a69b8c7732869f7b6a", string);

    this.http.post("https://secure.wayforpay.com/pay", {
      merchantAccount: "test_merch_n1",
      merchantAuthType: "SimpleSignature",
      merchantDomainName: "www.market.ua",
      orderReference: "DH1694809093",
      orderDate: 1415379863,
      amount: 1547.36,
      currency: "UAH",
      orderTimeout: 49000,
      productName: ["Процессор Intel Core i5-4670 3.4GHz"],
      productPrice: [1000],
      productCount: [1],
      clientFirstName: "Вася",
      clientLastName: "Пупкин",
      clientAddress: "пр. Гагарина, 12",
      clientCity: "Днепропетровск",
      clientEmail: "some@mail.com",
      defaultPaymentSystem: "card",
      merchantSignature: "ea8d679cd326dfb0707167cdcb73635b"
    }).subscribe((data:any) => {})
  }
}
