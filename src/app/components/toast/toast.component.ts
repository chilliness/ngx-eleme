import { Component, OnInit, OnDestroy, Inject } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit, OnDestroy {
  [x: string]: any;
  msg = '';

  constructor(@Inject('share') private share$) { }

  ngOnInit() {
    this.seller$toast = this.share$.toast.subscribe(({ msg, callback, duration }) => {
      this.msg = msg;

      if (msg) {
        const timer = setTimeout(() => {
          clearTimeout(timer);
          callback();
          this.share$.handleSetToast({ msg: '' });
        }, duration || 1500);
      }
    });
  }

  ngOnDestroy() {
    this.seller$toast.unsubscribe();
  }
}
