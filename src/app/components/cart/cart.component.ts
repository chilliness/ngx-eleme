import { Component, OnInit, AfterViewInit, OnDestroy, Inject, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('scroll', { static: false }) scrollRef: ElementRef;

  [x: string]: any;
  isShow = false;
  isAnim = false;
  cart = { num: 0, list: [], payment: 0 };

  constructor(@Inject('shaw') $shaw, private $store: Store<any>) {
    Object.assign(this, $shaw);

    // 此处select的state来自app.module中定义，subscribe的cartList来自app.store中定义
    this.$store$state = $store.select(({ state }) => state).subscribe(({ cartList }) => {
      const list = cartList;
      let num = 0;
      let payment = 0;
      list.map(item => {
        num += item.cartNum;
        payment += item.cartNum * item.price;
      });

      // 添加购物车动画
      num < 1 && (this.isShow = false);
      if (num > this.cart.num) {
        this.isAnim = true;

        clearTimeout(this.timerOut);
        this.timerOut = setTimeout(() => {
          clearTimeout(this.timerOut);
          this.isAnim = false;
        }, 200);
      }

      this.cart = { num, list, payment };
    });
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.handleInitScroll('scroll');
  }

  ngOnDestroy() {
    this.$store$state.unsubscribe();
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

  handleToggle() {
    if (this.cart.num > 0) {
      this.isShow = !this.isShow;
    }
  }

  handleClear() {
    this.$store.dispatch({ type: 'cart:clean' });
  }

  $nextTick(callback) {
    const timerOut = setTimeout(() => {
      clearTimeout(timerOut);
      callback && callback();
    }, 100);
  }
}
