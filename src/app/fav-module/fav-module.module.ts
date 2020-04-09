import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavModuleRoutingModule } from './fav-module-routing.module';
import { FavModuleComponent } from './fav-module.component';


@NgModule({
  declarations: [FavModuleComponent],
  imports: [
    CommonModule,
    FavModuleRoutingModule
  ]
})
export class FavModuleModule { }
