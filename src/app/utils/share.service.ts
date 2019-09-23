import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ShareService {
  data = new BehaviorSubject({ goods: [], ratings: [], seller: {} });
  toast = new BehaviorSubject({});

  handleSetData(val) {
    this.data.next(val);
  }

  handleSetToast(val) {
    this.toast.next(val);
  }
}
