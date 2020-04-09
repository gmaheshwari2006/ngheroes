import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavModuleComponent } from './fav-module.component';

const routes: Routes = [
  { path: 'fav', component: FavModuleComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavModuleRoutingModule { }
