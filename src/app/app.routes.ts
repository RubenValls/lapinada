import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ThanksPageComponent } from './thanks-page/thanks-page/thanks-page.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'thanks', component: ThanksPageComponent },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
