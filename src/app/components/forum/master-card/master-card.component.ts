import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-card',
  templateUrl: './master-card.component.html',
  styleUrls: ['./master-card.component.scss']
})
export class MasterCardComponent implements OnInit {
  @Input() imgUrl;
  @Input() title;
  @Input() name;
  @Input() sname;
  @Input() tradition;
  @Input() time;
  constructor() { }

  ngOnInit(): void {
  }

}
