import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhimsaComponent } from './components/ahimsa/ahimsa.component';
import { ArtContestComponent } from './components/art-contest/art-contest.component';
import { ForumComponent } from './components/forum/forum.component';
import { ThankyouPageComponent } from './components/forum/thankyou-page/thankyou-page.component';
import { LiveTranslationComponent } from './components/live-translation/live-translation.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MovementResolutionComponent } from './components/movement-resolution/movement-resolution.component';
import { ResolutionComponent } from './components/resolution/resolution.component';
import { SecondForumComponent } from './components/second-forum/second-forum.component';
import { ThanksAhimsaComponent } from './components/thanks-ahimsa/thanks-ahimsa.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { CourseComponent } from './components/course/course.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { CreationComponent } from './components/creation/creation.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentApplyComponent } from './components/payment-apply/payment-apply.component';
import { SamayaComponent } from './components/samaya/samaya.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'second-forum', component: SecondForumComponent },
  { path: 'live', component: LiveTranslationComponent },
  { path: 'ahimsa', component: AhimsaComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'payment-apply', component: PaymentApplyComponent },
  { path: 'art', component: ArtContestComponent },
  { path: 'course', component: CourseComponent },
  { path: 'thanks', component: ThankyouPageComponent },
  { path: 'course-thanks', component: ThanksComponent },
  { path: 'message-from-users', component: UsersListComponent },
  { path: 'resolution', component: ResolutionComponent },
  { path: 'movement-resolution', component: MovementResolutionComponent },
  { path: 'thanks-ahimsa', component: ThanksAhimsaComponent},
  { path: 'samaya', component: SamayaComponent},
  { path: 'subscription', component: SubscriptionComponent},
  { path: 'creation', component: CreationComponent },
  { path: ':type', component: MainPageComponent },
  { path: 'resolution/:type', component: ResolutionComponent },
  { path: 'second-forum/:type', component: SecondForumComponent },
  { path: 'ahimsa/:type', component: AhimsaComponent },
  { path: 'thanks/:type', component: ThankyouPageComponent },
  { path: 'live/:type', component: LiveTranslationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
