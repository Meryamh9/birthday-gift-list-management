import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AccueilComponent } from './accueil.component';
import {MatButtonModule} from '@angular/material/button'; 

@NgModule({
  declarations: [
    AccueilComponent
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule,
    SharedModule,
  ]
})
export class AccueilModule { }
