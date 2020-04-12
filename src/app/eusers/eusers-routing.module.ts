import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EusersComponent } from './eusers.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [{ path: 'users', component: EusersComponent },
{ path: 'detail/:id', component: UserDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EusersRoutingModule { }
