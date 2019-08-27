import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodsComponent } from './pages/goods/goods.component';
import { RatingComponent } from './pages/rating/rating.component';
import { SellerComponent } from './pages/seller/seller.component';

const routes: Routes = [
  { path: 'goods', component: GoodsComponent, data: { keep: true } },
  { path: 'rating', component: RatingComponent },
  { path: 'seller', component: SellerComponent },
  { path: '**', redirectTo: 'goods' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
