import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  formAmount: FormGroup;
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

  sendGetRequest() {
    const url = 'https://wiki.wayforpay.com/wiki/default/generate-hmac';
    const params = {
      key: 'b4444121b00943e695a963a69b8c7732869f7b6a',
      string: `yogisforpeace_life;http://yogisforpeace.life;DH783023;1415379863;${this.formAmount.get('amount').value};${this.formAmount.get('currency').value};Процессор Intel Core i5-4670 3.4GHz;Память Kingston DDR3-1600 4096MB PC3-12800;1;1;1000;547.36`
    };
    this.http.get(url, { params }).subscribe(
      (response) => {
        console.log('Response:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
