import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EusersComponent } from './eusers.component';

const routes: Routes = [{ path: 'users', component: EusersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EusersRoutingModule { }
