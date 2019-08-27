import { Component, AfterViewInit, OnDestroy, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollMark', { static: false }) scrollMarkRef: any;

  [x: string]: any;
  seller = {};
  navList = [{ url: '/goods', text: '商品' }, { url: '/rating', text: '评价' }, { url: '/seller', text: '商家' }];
  isShow = false;

  constructor(@Inject('shaw') $shaw, @Inject('share') private share$) {
    Object.assign(this, $shaw);
    this['data$'] = this.share$.data.subscribe(({ seller }) => (this.seller = seller));
  }

  ngAfterViewInit() {
    this.handleInitScroll('scrollMark');
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
