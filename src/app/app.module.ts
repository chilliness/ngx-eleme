import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import axios from 'axios';
import BScroll from 'better-scroll';
import api from './utils/api';
// axios响应拦截器
axios.interceptors.response.use(res => res.data);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodsComponent } from './pages/goods/goods.component';
import { RatingComponent } from './pages/rating/rating.component';
import { SellerComponent } from './pages/seller/seller.component';

import { BtnComponent } from './components/btn/btn.component';
import { CartComponent } from './components/cart/cart.component';
import { DivideComponent } from './components/divide/divide.component';
import { IconComponent } from './components/icon/icon.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NavComponent } from './components/nav/nav.component';
import { StarComponent } from './components/star/star.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { ToastComponent } from './components/toast/toast.component';

// 数据共享
import { ShareService } from './utils/share.service';

// 状态管理
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.store';

// 路由缓存
import { RouteReuseStrategy } from '@angular/router';
import { AppRoutingCache } from './app-routing.cache';

@NgModule({
  declarations: [
    AppComponent,
    GoodsComponent,
    RatingComponent,
    SellerComponent,
    BtnComponent,
    CartComponent,
    DivideComponent,
    IconComponent,
    LoadingComponent,
    NavComponent,
    StarComponent,
    ToggleComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ state: appReducer })
  ],
  providers: [
    { provide: 'shaw', useValue: { $api: api, $http: axios, $BScroll: BScroll } },
    { provide: 'share', useClass: ShareService },
    { provide: RouteReuseStrategy, useClass: AppRoutingCache }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
