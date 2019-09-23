import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  @Input() data = {
    nowType: -1,
    isHasContent: false,
    list: [{ text: '全部', type: -1, num: 0 }, { text: '满意', type: 1, num: 0 }, { text: '不满意', type: 0, num: 0 }]
  };

  @Output() emitToggle = new EventEmitter();

  handleToggle(bool, num) {
    this.emitToggle.emit({ isHasContent: bool, nowType: num });
  }

  handleBy(index) {
    return index;
  }
}
