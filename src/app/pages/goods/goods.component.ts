import { Component, OnInit, AfterViewInit, OnDestroy, Inject, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('scrollLeft', { static: false }) scrollLeftRef: any;
  @ViewChild('scrollRight', { static: false }) scrollRightRef: any;
  @ViewChild('scrollFood', { static: false }) scrollFoodRef: any;
  @ViewChildren('box') boxRef: any;

  [x: string]: any;
  goods = [];
  nowIndex = 0;
  food = { ratings: [] };
  toggleData = {};
  ratingList = [];

  constructor(@Inject('shaw') $shaw, @Inject('share') private share$) {
    Object.assign(this, $shaw);
  }

  ngOnInit() {
    this.share$data = this.share$.data.subscribe(({ goods }) => this.goods = goods);
  }

  ngAfterViewInit() {
    this.handleInitScroll('scrollLeft');
    this.handleInitScroll('scrollRight');
    this.handleInitScroll('scrollFood');
  }

  ngOnDestroy() {
    this.share$data.unsubscribe();
  }

  handleInitScroll(ref, config: object = { scrollY: true, click: true, probeType: 3 }) {
    this.$nextTick(() => {
      if (!this[ref]) {
        this[ref] = new this.$BScroll(this[`${ref}Ref`].nativeElement, config);

        if (ref === 'scrollRight') {
          const arr = [];

          this[ref].on('scroll', pos => {
            if (!arr.length) {
              this.boxRef._results.forEach(item => arr.push(-item.nativeElement.offsetTop));
              arr.push(-Infinity);
            }

            this.nowIndex = Math.max(0, arr.findIndex(item => item < pos.y) - 1);
          });
        }
      } else {
        this[ref].refresh();
      }
    });
  }

  handleSelect(index) {
    if (this.boxRef._results[index] && this.scrollRight) {
      this.scrollRight.scrollToElement(this.boxRef._results[index].nativeElement, 300);
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
      list: [
        { text: '全部', type: -1, num: this.food.ratings.length },
        { text: '满意', type: 1, num: this.food.ratings.filter(item => item.rateType).length },
        { text: '不满意', type: 0, num: this.food.ratings.filter(item => !item.rateType).length }
      ]
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

  $nextTick(callback) {
    const timerOut = setTimeout(() => {
      clearTimeout(timerOut);
      callback && callback.call(this);
    }, 60);
  }
}
