import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as appState from '../../app.store';
declare let require: any;
const BScroll = require('better-scroll').default;

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit, AfterViewInit {

  @ViewChild('nav') nav: ElementRef;
  @ViewChild('list') list: ElementRef;

  curIndex = 0;
  arr = [];
  arrList = [];
  goods: any[];

  constructor(private http: HttpClient, private store: Store<appState.AppState>) { }

  ngOnInit() {
    this.http.get('../../../assets/data.json').subscribe((res) => {
      if (res['code'] == 0) {
        this.goods = res['goods'];
        this.goods.forEach((item) => {
          // 为每一个商品添加购物车数量
          item.foods.forEach((_item) => {
            _item['cartNum'] = 0;
          });
        });
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      // 初始化左边菜单
      if (!this['scrollLeft']) {
        this['scrollLeft'] = new BScroll(this.nav.nativeElement, {
          click: true
        });
      } else {
        this['scrollLeft'].refresh();
      }
      // 初始化右边列表
      const list = this.list.nativeElement;
      if (!this['scrollRight']) {
        this['scrollRight'] = new BScroll(list, {
          click: true,
          probeType: 3
        });
        // 计算每一个列表项所在区间
        const lis = list.children[0].children;
        for (let i = 0; i < lis.length; i++) {
          // 存储每一个列表项
          this.arrList.push(lis[i]);
          if (i == 0) {
            this.arr.push(-lis[i].clientHeight);
          } else {
            this.arr.push(-lis[i].clientHeight + this.arr[i - 1]);
          }
        }
      } else {
        this['scrollRight'].refresh();
      }
      // 监听右列表滚动
      this['scrollRight'].on('scroll', pos => {
        this.curIndex = this.arr.findIndex((item) => item < pos.y);
      });
    }, 300);
  }

  onToPos(index) {
    this.curIndex = index;
    this['scrollRight'].scrollToElement(this.arrList[index], 0);
  }

  onShow(food) {
    this.store.dispatch({ type: appState.FLAG });
    this.store.dispatch({ type: appState.FOOD, payload: food });
  }

}
