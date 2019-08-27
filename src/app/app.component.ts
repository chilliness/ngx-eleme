import { Component, AfterViewInit, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  [x: string]: any;
  isAjax = false;
  isLoading = true;

  constructor(@Inject('shaw') $shaw, @Inject('share') private share$) {
    Object.assign(this, $shaw);
  }

  ngAfterViewInit() {
    this.handleFetchData();
  }

  async handleFetchData() {
    if (this.isAjax) {
      return;
    }

    try {
      this.isAjax = true;
      const res = await this.$http({ url: this.$api.list });
      this.isAjax = false;

      if (res.code === 200) {
        this.isLoading = false;
        this.share$.handleSetData(res.data);
      } else {
        this.share$.handleSetToast({ msg: this.$api.msg });
      }
    } catch (e) {
      this.isAjax = false;
      this.share$.handleSetToast({ msg: this.$api.msg });
    }
  }
}
