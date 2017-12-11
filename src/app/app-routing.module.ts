import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodsComponent } from './components/goods/goods.component';
import { RatingComponent } from './components/rating/rating.component';
import { SellerComponent } from './components/seller/seller.component';

const routes: Routes = [
  {
    path: 'goods',
    component: GoodsComponent
  },
  {
    path: 'rating',
    component: RatingComponent
  },
  {
    path: 'seller',
    component: SellerComponent
  },
  {
    path: '**',
    redirectTo: 'goods',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
