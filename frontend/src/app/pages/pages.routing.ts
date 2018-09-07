import { Routes, RouterModule }  from '@angular/router';
import { DeliveryComponent } from './delivery/delivery.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  // { path: '', redirectTo: 'main', pathMatch: 'full' },
  // {
  //   path: 'delivery',
  //   component: DeliveryComponent
  // },
  // {
  //   path: 'main',
  //   component: MainComponent
  // }
];

export const routing = RouterModule.forRoot(routes);
