import { Component, OnInit, AfterViewInit, OnDestroy, Inject, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('scrollMark', { static: false }) scrollMarkRef: ElementRef;

  [x: string]: any;
  seller = {};
  nav = [{ name: '/goods', text: '商品' }, { name: '/rating', text: '评价' }, { name: '/seller', text: '商家' }];
  isShow = false;

  constructor(@Inject('shaw') $shaw, @Inject('share') private share$) {
    Object.assign(this, $shaw);
  }

  ngOnInit() {
    this.share$data = this.share$.data.subscribe(({ seller }) => this.seller = seller);
  }

  ngAfterViewInit() {
    this.handleInitScroll('scrollMark');
  }

  ngOnDestroy() {
    this.share$data.unsubscribe();
  }

  handleInitScroll(ref, config: object = { scrollY: true, click: true }) {
    this.$nextTick(() => {
      if (!this[ref]) {
        this[ref] = new this.$BScroll(this[`${ref}Ref`].nativeElement, config);
      } else {
        this[ref].refresh();
      }
    });
  }

  $nextTick(callback) {
    const timerOut = setTimeout(() => {
      clearTimeout(timerOut);
      callback && callback();
    }, 100);
  }
}
