import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EusersComponent } from './eusers/eusers.component';

const routes: Routes = [
  { path: 'FavModule', loadChildren: () => import('./fav-module/fav-module.module').
  then(m => m.FavModuleModule) },
  { path: 'eusers', loadChildren: () => import('./eusers/eusers.module').then(m => m.EusersModule) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
