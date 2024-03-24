import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/gift',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then(m => m.AccueilModule)
  },
  {
    path: 'gift',
    loadChildren: () => import('./gift/gift.module').then(m => m.GiftModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
