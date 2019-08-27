import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
  styles: [':host {font-size: 0}']
})
export class BtnComponent {
  @Input() food = { cartNum: 0 };

  [x: string]: any;
  isAjax = false;

  constructor(private $store: Store<any>) {}

  handleCart(num, e) {
    e.stopPropagation();

    if (this.isAjax) {
      return;
    }

    this.isAjax = true;
    this.food.cartNum += num;
    this.$store.dispatch({ type: 'cart:change', payload: this.food });
    // 保证添加购物车动画的顺利执行
    num > 0 && this.$store.dispatch({ type: 'cart:anim', payload: true });
    setTimeout(() => {
      this.isAjax = false;
      num > 0 && this.$store.dispatch({ type: 'cart:anim', payload: false });
    }, 200);
  }
}
