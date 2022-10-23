import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhimsaComponent } from './components/ahimsa/ahimsa.component';
import { ForumComponent } from './components/forum/forum.component';
import { ThankyouPageComponent } from './components/forum/thankyou-page/thankyou-page.component';
import { LiveTranslationComponent } from './components/live-translation/live-translation.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MovementResolutionComponent } from './components/movement-resolution/movement-resolution.component';
import { NewsPageComponent } from './components/news-page/news-page.component';
import { ResolutionComponent } from './components/resolution/resolution.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'live', component: LiveTranslationComponent },
  { path: 'ahimsa', component: AhimsaComponent },
  { path: 'thanks', component: ThankyouPageComponent },
  { path: 'message-from-users', component: UsersListComponent },
  { path: 'resolution', component: ResolutionComponent },
  { path: 'movement-resolution', component: MovementResolutionComponent },
  { path: ':type', component: MainPageComponent },
  { path: 'resolution/:type', component: ResolutionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
