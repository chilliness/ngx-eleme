import { Component, OnDestroy, Inject } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnDestroy {
  [x: string]: any;

  constructor(@Inject('share') private share$) {
    this['toast$'] = this.share$.toast.subscribe(({ msg = '', callback = () => {}, duration = 1500 }) => {
      this['msg'] = msg;
      setTimeout(() => {
        this['msg'] = '';
        callback();
      }, duration);
    });
  }

  ngOnDestroy() {
    this.toast$.unsubscribe();
  }
}
