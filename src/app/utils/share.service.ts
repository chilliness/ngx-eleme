import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const toastConfig = { msg: '', callback() { } };

@Injectable()
export class ShareService {
  data = new BehaviorSubject({ goods: [], ratings: [], seller: {} });
  toast = new BehaviorSubject(toastConfig);

  constructor() { }

  handleSetData(val) {
    this.data.next(val);
  }

  handleSetToast(val) {
    this.toast.next({ ...toastConfig, ...val });
  }
}
