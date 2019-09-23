import { Component, AfterViewInit, OnDestroy, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollRef', { static: false }) scrollRef: any;

  [x: string]: any;
  seller: any = {};
  ratings = [];
  toggleData = {};
  ratingList = [];

  constructor(@Inject('shaw') $shaw, @Inject('share') private share$) {
    Object.assign(this, $shaw);
    this['data$'] = this.share$.data.subscribe(({ seller, ratings }) => {
      this.seller = seller;
      this.ratings = ratings;
      this.handleToggle({ nowType: -1, isHasContent: false });
    });
  }

  ngAfterViewInit() {
    this.handleInitScroll('scroll');
  }

  ngOnDestroy() {
    this.data$.unsubscribe();
  }

  handleInitScroll(ref, config: object = { scrollY: true, click: true }) {
    if (!this[ref]) {
      this[ref] = new this.$BScroll(this[`${ref}Ref`].nativeElement, config);
    } else {
      this[ref].refresh();
    }
  }

  handleToggle({ nowType, isHasContent }) {
    this.toggleData = {
      nowType,
      isHasContent,
      list: [{ text: '全部', type: -1, num: this.ratings.length }, { text: '满意', type: 1, num: this.ratings.filter(item => item.rateType).length }, { text: '不满意', type: 0, num: this.ratings.filter(item => !item.rateType).length }]
    };

    const arr = this.ratings.filter(item => {
      if (nowType === -1) {
        return true;
      }
      return item.rateType === nowType;
    });

    this.ratingList = isHasContent ? arr.filter(item => item.text) : arr;
  }

  handleBy(index) {
    return index;
  }
}
