import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { RatingComponent } from './components/rating/rating.component';
import { SellerComponent } from './components/seller/seller.component';
import { FoodComponent } from './components/food/food.component';

import { IconComponent } from './components/icon/icon.component';
import { StarComponent } from './components/star/star.component';
import { BtnComponent } from './components/btn/btn.component';
import { SplitComponent } from './components/split/split.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    GoodsComponent,
    RatingComponent,
    SellerComponent,
    FoodComponent,
    IconComponent,
    StarComponent,
    BtnComponent,
    SplitComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ flag: appReducer, food: appReducer, goods: appReducer }),
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule // 为防止出现意外bug，此模块建议放在最后一个
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
