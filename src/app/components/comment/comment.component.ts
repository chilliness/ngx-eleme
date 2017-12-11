import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comments = [{ title: '全部', num: 0 }, { title: '满意', num: 0 }, { title: '不满意', num: 0 }];

  @Output() change = new EventEmitter();

  cls = ['all', 'good', 'bad'];
  curIndex = 0;
  onlyHave = false;

  constructor() { }

  ngOnInit() {
  }

  onChange(index, ev) {
    if (ev) {
      this.curIndex = index;
    } else {
      this.onlyHave = !this.onlyHave;
    }
    this.change.emit({ curIndex: this.curIndex, onlyHave: this.onlyHave });
  }

}
