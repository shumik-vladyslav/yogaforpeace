import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { LiveTranslationComponent } from './components/live-translation/live-translation.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SafePipe } from './safe.pipe';
import { ForumComponent } from './components/forum/forum.component';
import { MasterCardComponent } from './components/forum/master-card/master-card.component';
import { ThankyouPageComponent } from './components/forum/thankyou-page/thankyou-page.component';
import { AhimsaComponent } from './components/ahimsa/ahimsa.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireModule } from '@angular/fire/compat';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { ResolutionComponent } from './components/resolution/resolution.component';
import { AdiitionalInfoComponent } from './components/adiitional-info/adiitional-info.component';
import { DownloadAhimsaComponent } from './components/download-ahimsa/download-ahimsa.component';
import { MovementResolutionComponent } from './components/movement-resolution/movement-resolution.component';
import { SecondForumComponent } from './components/second-forum/second-forum.component';
import { ThanksAhimsaComponent } from './components/thanks-ahimsa/thanks-ahimsa.component';
import {MatSelectModule} from '@angular/material/select';
import { ArtContestComponent } from './components/art-contest/art-contest.component';
import { CourseComponent } from './components/course/course.component';
import { PicturePreviewComponent } from './components/picture-preview/picture-preview.component';
import { VideoDialogComponent } from './components/video-dialog/video-dialog.component';
// import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ThanksComponent } from './components/thanks/thanks.component';
import { CreationComponent } from './components/creation/creation.component';
import { LightgalleryModule } from 'lightgallery/angular/12';
import {MatTabsModule} from '@angular/material/tabs';
import { PaymentComponent } from './components/payment/payment.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaymentApplyComponent } from './components/payment-apply/payment-apply.component';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NewsPageComponent,
    LiveTranslationComponent,
    SafePipe,
    ForumComponent,
    MasterCardComponent,
    ThankyouPageComponent,
    AhimsaComponent,
    UsersListComponent,
    DownloadAhimsaComponent,
    AdiitionalInfoComponent,
    ResolutionComponent,
    MovementResolutionComponent,
    SecondForumComponent,
    ThanksAhimsaComponent,
    ArtContestComponent,
    CourseComponent,
    PicturePreviewComponent,
    VideoDialogComponent,
    ThanksComponent,
    CreationComponent,
    PaymentComponent,
    FooterComponent,
    PaymentApplyComponent,
  ],
  imports: [
    BrowserModule,
    // NgxUsefulSwiperModule,
    AppRoutingModule,
    NgxUiLoaderModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule,
    NgxIntlTelInputModule,
    LightgalleryModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'ru',
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFirestore(() => getFirestore()),
  ],
  providers: [ { provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent],
})
export class AppModule {}
