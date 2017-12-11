import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import * as appState from '../../app.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      state('in', style({ opacity: 1 })),
      transition('* => *', animate('.3s'))
    ])
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {

  markFlag = false;
  seen: boolean;
  seller: any;
  target$: Observable<boolean>;
  targetSubscription: Subscription;

  constructor(private http: HttpClient, private store: Store<appState.AppState>) {
    this.target$ = this.store.select('flag');
  }

  ngOnInit() {
    this.targetSubscription = this.target$.subscribe((res) => {
      this.seen = res['flag'];
    });

    this.http.get('../../../assets/data.json').subscribe((res) => {
      if (res['code'] == 0) {
        this.seller = res['seller'];
      }
    });
  }

  ngOnDestroy() {
    this.targetSubscription.unsubscribe();
  }

}
