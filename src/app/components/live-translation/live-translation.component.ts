import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'app-live-translation',
  templateUrl: './live-translation.component.html',
  styleUrls: ['./live-translation.component.scss']
})
export class LiveTranslationComponent implements OnInit {

  constructor(private _location: Location,) { }

  ngOnInit(): void {
  }

  goBack(){
    this._location.back();
  }
}
