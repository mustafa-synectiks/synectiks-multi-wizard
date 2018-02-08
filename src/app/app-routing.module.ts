import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { PersonalComponent} from './personal/personal.component';
import { WorkComponent} from './work/work.component';
import { AddressComponent} from './address/address.component';
import { ResultComponent} from './result/result.component';
import { DiscoveryComponent} from './discovery/discovery.component';
import {GapComponent} from './gap/gap.component';

export const appRoutes: Routes  =  [
  // 1St Route
  { path: 'personal', component: PersonalComponent },
  // 2nd Route
  { path: 'work', component: WorkComponent },
  // 3rd Route
  { path: 'address', component: AddressComponent },
  // 4th Route
  { path: 'result', component: ResultComponent },
  // 5th Route
  { path: '', redirectTo: '/personal', pathMatch: 'full' },
  // 6th Route
  { path: '**', component: PersonalComponent },
  // nested routes
  // 1st Route
  { path: 'discovery', component: DiscoveryComponent },
  // 2nd Route
  { path: 'gap', component: GapComponent }
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes, { useHash: true } )],
  exports: [RouterModule]
})

export class AppRoutingModule {}















































































































































































































































