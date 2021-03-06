import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EusersRoutingModule } from './eusers-routing.module';
import { EusersComponent } from './eusers.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserSearchComponent } from './userSearch/user-search.component';

@NgModule({
  declarations: [EusersComponent, UserDetailsComponent, UserSearchComponent],
  imports: [
    CommonModule,
    EusersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class EusersModule { }
