import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Input() data = {
    nowType: -1,
    isHasContent: false,
    list: [
      { text: '全部', type: -1, num: 0 },
      { text: '满意', type: 1, num: 0 },
      { text: '不满意', type: 0, num: 0 }
    ]
  };

  @Output() toggle = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  handleToggle(bool, num) {
    this.toggle.emit({ isHasContent: bool, nowType: num });
  }

  handleBy(index) {
    return index;
  }
}
