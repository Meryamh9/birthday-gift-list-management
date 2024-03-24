import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../shared/shared.module';
import { NavigationComponent } from './components/navigation/navigation.component';



@NgModule({
  declarations: [
  
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SharedModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class CoreModule { }
