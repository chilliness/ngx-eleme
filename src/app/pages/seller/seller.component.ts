import { Component, OnInit, AfterViewInit, OnDestroy, Inject, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('scroll', { static: false }) scrollRef: ElementRef;
  @ViewChild('scrollX', { static: false }) scrollXRef: ElementRef;

  [x: string]: any;
  seller = {};

  constructor(@Inject('shaw') $shaw, @Inject('share') private share$) {
    Object.assign(this, $shaw);
  }

  ngOnInit() {
    this.seller$data = this.share$.data.subscribe(({ seller }) => this.seller = seller);
  }

  ngAfterViewInit() {
    this.handleInitScroll('scroll');
    this.handleInitScroll('scrollX', { scrollX: true });
  }

  ngOnDestroy() {
    this.seller$data.unsubscribe();
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
