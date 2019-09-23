import { Component, AfterViewInit, OnDestroy, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollLeftRef', { static: false }) scrollLeftRef: any;
  @ViewChild('scrollRightRef', { static: false }) scrollRightRef: any;
  @ViewChild('scrollFoodRef', { static: false }) scrollFoodRef: any;
  @ViewChild('listBoxRef', { static: false }) listBoxRef: any;

  [x: string]: any;
  goods = [];
  nowIndex = 0;
  food: any = { ratings: [] };
  toggleData = {};
  ratingList = [];

  constructor(@Inject('shaw') $shaw, @Inject('share') private share$) {
    Object.assign(this, $shaw);
    this['data$'] = this.share$.data.subscribe(({ goods }) => (this.goods = goods));
  }

  ngAfterViewInit() {
    this.handleInitScroll('scrollLeft');
    this.handleInitScroll('scrollRight');
    this.handleInitScroll('scrollFood');
  }

  ngOnDestroy() {
    this.data$.unsubscribe();
  }

  handleInitScroll(ref, config: object = { scrollY: true, click: true, probeType: 3 }) {
    if (!this[ref]) {
      this[ref] = new this.$BScroll(this[`${ref}Ref`].nativeElement, config);

      if (ref === 'scrollRight') {
        const arr = [];

        this[ref].on('scroll', pos => {
          if (!arr.length) {
            [...this.listBoxRef.nativeElement.children].forEach(item => arr.push(-item.offsetTop));
            arr.push(-Infinity);
          }

          // 性能优化
          const nowIndex = Math.max(0, arr.findIndex(item => item < pos.y) - 1);
          if (nowIndex !== this.nowIndex) {
            this.nowIndex = nowIndex;
          }
        });
      }
    } else {
      this[ref].refresh();
    }
  }

  handleSelect(index) {
    const item = this.listBoxRef.nativeElement.children[index];
    if (item && this.scrollRight) {
      this.scrollRight.scrollToElement(item, 300);
    }
  }

  handleShowFood(food) {
    this.scrollFood && this.scrollFood.scrollTo(0, 0, 0);
    this.food = Object.assign(food, { isShow: true });
    this.handleToggle({ nowType: -1, isHasContent: false });
  }

  handleToggle({ nowType, isHasContent }) {
    this.toggleData = {
      nowType,
      isHasContent,
      list: [{ text: '全部', type: -1, num: this.food.ratings.length }, { text: '满意', type: 1, num: this.food.ratings.filter(item => item.rateType).length }, { text: '不满意', type: 0, num: this.food.ratings.filter(item => !item.rateType).length }]
    };

    const arr = this.food.ratings.filter(item => {
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
