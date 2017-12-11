import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare let require: any;
const BScroll = require('better-scroll').default;

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit, AfterViewInit {

  @ViewChild('main') main: ElementRef;

  icon = ['icon-thumb_up', 'icon-thumb_down'];
  curIndex = 0;
  flag = false;
  seller: any;
  ratings: any[];
  comments: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../../../assets/data.json').subscribe((res) => {
      if (res['code'] == 0) {
        this.seller = res['seller'];
        this.ratings = res['ratings'];
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

}
