import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-apply',
  templateUrl: './payment-apply.component.html',
  styleUrls: ['./payment-apply.component.scss']
})
export class PaymentApplyComponent implements OnInit {
  formAmount: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.formAmount = new FormGroup({
      amount: new FormControl(1, Validators.required),
      currency: new FormControl("USD", Validators.required)
    });
  }

  submitForm() {}

}
