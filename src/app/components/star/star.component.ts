import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  @Input() size = 24;
  @Input() score = 5;
  @Input() num = 5;

  icon = [];
  cls = 'size-';
  star = Array(this.num);

  constructor() { }

  ngOnInit() {
    // 需要显示多少颗星
    if (this.score >= this.num) {
      this.star = Array(Math.ceil(this.score));
    }
    // 有多少颗完整的星
    for (let i = 0; i < Math.floor(this.score); i++) {
      this.icon.push('on');
    }
    // 是否有半星
    if (this.score < Math.round(this.score)) {
      this.icon.push('half');
    }
    // 是否小于需要显示的星
    if (this.icon.length < this.star.length) {
      const diff = this.star.length - this.icon.length;
      for (let i = 0; i < diff; i++) {
        this.icon.push('');
      }
    }
  }

}
