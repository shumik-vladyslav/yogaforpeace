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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'ru',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
