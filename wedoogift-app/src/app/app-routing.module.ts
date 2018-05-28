import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./component/not-found/not-found.component";
import {ForbiddenComponent} from "./component/forbidden/forbidden.component";
import {ChallengeComponent} from "./site/challenge/challenge.component";

export const routes: Routes = [
  {
    path: '',
    component: ChallengeComponent,
    pathMatch: 'full'
  },
  {
    path: 'challenge',
    component: ChallengeComponent,
    pathMatch: 'full'
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '403',
    component: ForbiddenComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
