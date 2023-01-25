import { Component, OnInit } from '@angular/core';
import { Languages } from 'src/app/app.component';
import { GeneralServiceService } from 'src/app/services/general-service.service';

@Component({
  selector: 'app-thanks-ahimsa',
  templateUrl: './thanks-ahimsa.component.html',
  styleUrls: ['./thanks-ahimsa.component.scss']
})
export class ThanksAhimsaComponent implements OnInit {

  constructor(private generalService: GeneralServiceService) { }

  ngOnInit(): void {
    this.generalService.currentLanguage.subscribe(lan => {
      this.setLanguage(lan)
    })
  };
  presentationUrl: string = '../../../assets/presentations/ahimsa.pdf';
  downloadPresentation(): void {
    window.open(
      this.presentationUrl,
      '_blank'
    );
  }
  lan
  setLanguage(language) {
    
    this.lan = language;
    switch (language) {
      case Languages.English:
        this.presentationUrl = '../../../assets/presentations/ahimsa_en.pdf'
        break;
      case Languages.Russian:
        this.presentationUrl = '../../../assets/presentations/ahimsa.pdf'
        break;
      case Languages.Ukrainian:
        this.presentationUrl = '../../../assets/presentations/ahimsa.pdf'
        break;
    }
  }
}
