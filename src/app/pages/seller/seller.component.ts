import { Component, AfterViewInit, OnDestroy, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scroll', { static: false }) scrollRef: any;
  @ViewChild('scrollX', { static: false }) scrollXRef: any;

  [x: string]: any;
  seller = {};

  constructor(@Inject('shaw') $shaw, @Inject('share') private share$) {
    Object.assign(this, $shaw);
    this['data$'] = this.share$.data.subscribe(({ seller }) => (this.seller = seller));
  }

  ngAfterViewInit() {
    this.handleInitScroll('scroll');
    this.handleInitScroll('scrollX', { scrollX: true });
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

  handleBy(index) {
    return index;
  }
}
