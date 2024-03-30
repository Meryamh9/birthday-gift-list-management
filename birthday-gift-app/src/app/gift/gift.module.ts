import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiftRoutingModule } from './gift-routing.module';
import { GiftComponent } from './gift.component';
import { GiftListComponent } from './pages/gift-list/gift-list.component';
import { SharedModule } from '../shared/shared.module';
import { GiftFormComponent } from './components/gift-form/gift-form.component';

@NgModule({
  declarations: [
    GiftComponent,
    GiftListComponent,
    GiftFormComponent
  ],
  imports: [
    CommonModule,
    GiftRoutingModule,
    SharedModule,
  ]
})
export class GiftModule { }
