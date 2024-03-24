import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftListComponent } from './pages/gift-list/gift-list.component';

const routes: Routes = [
  {
    path: '',
    component: GiftListComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiftRoutingModule { }
