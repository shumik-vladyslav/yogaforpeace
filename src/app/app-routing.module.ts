import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './components/forum/forum.component';
import { ThankyouPageComponent } from './components/forum/thankyou-page/thankyou-page.component';
import { LiveTranslationComponent } from './components/live-translation/live-translation.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NewsPageComponent } from './components/news-page/news-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'live', component: LiveTranslationComponent },
  { path: 'thanks', component: ThankyouPageComponent },
  { path: ':type', component: MainPageComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
