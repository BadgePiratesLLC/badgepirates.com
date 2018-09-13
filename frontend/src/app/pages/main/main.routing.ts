import { Routes, RouterModule }  from '@angular/router';

import { MainComponent } from './main.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [ ]
  }
];

export const routing = RouterModule.forChild(routes);
