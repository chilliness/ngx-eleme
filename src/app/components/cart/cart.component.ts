import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import * as appState from '../../app.store';
declare let require: any;
const BScroll = require('better-scroll').default;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('main') main: ElementRef;

  flag = false;
  goods: any[];
  target$: Observable<any>;
  targetSubscription: Subscription;

  constructor(private store: Store<appState.AppState>) {
    this.target$ = this.store.select('goods');
  }

  ngOnInit() {
    this.targetSubscription = this.target$.subscribe((res) => {
      this.goods = res['goods'];
      if (this.goods.length == 0) {
        this.flag = false;
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (!this['scroll']) {
        this['scroll'] = new BScroll(this.main.nativeElement, {
          click: true
        });
      } else {
        this['scroll'].refresh();
      }
    }, 20);
  }

  ngOnDestroy() {
    this.targetSubscription.unsubscribe();
  }

  onToggle() {
    if (this.goods.length) {
      this.flag = !this.flag;
    }
  }

  onCalcTotal() {
    const temp = { totalNum: 0, totalMoney: 0 };
    for (let i = 0; i < this.goods.length; i++) {
      temp.totalMoney += this.goods[i].price * this.goods[i].cartNum;
      temp.totalNum += this.goods[i].cartNum;
    }
    return temp;
  }

  onChangeTxt() {
    if (!this.onCalcTotal().totalNum) {
      return '￥20起送';
    } else {
      return '还差￥' + (20 - this.onCalcTotal().totalMoney) + '起送';
    }
  }

  onToPay(ev) {
    ev.stopPropagation();
    if (this.onCalcTotal().totalMoney >= 20) {
      alert('您将支付的餐费和配送费总计为￥' + (this.onCalcTotal().totalMoney + 4));
    } else if (this.onCalcTotal().totalMoney == 0) {
      alert('￥20起送');
    } else {
      alert('还差￥' + (20 - this.onCalcTotal().totalMoney) + '起送');
    }
  }

  onDelAll(ev) {
    ev.stopPropagation();
    this.onToggle();
    this.store.dispatch({ type: appState.GOODS });
  }

  onChange(food, type, ev) {
    ev.stopPropagation();
    if (!ev._constructed) {
      return;
    }

    if (type == 'add') {
      ++food.cartNum;
    } else {
      --food.cartNum;
    }
    this.store.dispatch({ type: appState.GOODS, payload: food });
  }

}
