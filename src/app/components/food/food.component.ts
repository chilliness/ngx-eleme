import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import * as appState from '../../app.store';
declare let require: any;
const BScroll = require('better-scroll').default;


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('main') main: ElementRef;

  icon = ['icon-thumb_up', 'icon-thumb_down'];
  curIndex = 0;
  flag = false;
  food: any;
  ratings: any[];
  comments: any[];
  target$: Observable<any>;
  targetSubscription: Subscription;

  constructor(private http: HttpClient, private store: Store<appState.AppState>) {
    this.target$ = this.store.select('food');
  }

  ngOnInit() {
    this.targetSubscription = this.target$.subscribe((res) => {
      this.food = res['food'];
      this.ratings = res['food']['ratings'];
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
      // 评论配置项
      const all = this.ratings.length;
      const good = this.ratings.filter((item) => {
        return item.rateType == 0;
      }).length;
      const bad = this.ratings.filter((item) => {
        return item.rateType == 1;
      }).length;
      this.comments = [
        { title: '全部', num: all },
        { title: '满意', num: good },
        { title: '不满意', num: bad }
      ];
    }, 300);
  }

  ngOnDestroy() {
    this.targetSubscription.unsubscribe();
  }

  onReformRatings(ev?) {
    if (ev) {
      this.curIndex = ev.curIndex;
      this.flag = ev.onlyHave;
    }
    const arr = this.ratings.filter((item) => {
      if (!this.curIndex) {
        return item;
      } else {
        return item.rateType == this.curIndex - 1;
      }
    });
    return arr.filter((item) => {
      if (!this.flag) {
        return item;
      } else {
        return item.text.length > 0;
      }
    });
  }

  onHide() {
    this.store.dispatch({ type: appState.FLAG });
  }

  onAdd(food) {
    ++food.cartNum;
    this.store.dispatch({ type: appState.GOODS, payload: food });
  }

}
