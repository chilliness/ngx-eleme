import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as appState from '../../app.store';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  @Input() food: any;

  constructor(private store: Store<appState.AppState>) { }

  ngOnInit() {
  }

  onChange(food, type, ev) {
    ev.stopPropagation();
    if (!ev._constructed) {
      return;
    }

    if (type == 'add') {
      ++food.cartNum;
    } else {
      --food.cartNum;
    }
    this.store.dispatch({ type: appState.GOODS, payload: food });
  }

}
