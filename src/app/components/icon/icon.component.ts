import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  styles: [':host {font-size: 0}']
})
export class IconComponent implements OnInit {
  @Input() type = 0;
  @Input() size = false;

  constructor() { }

  ngOnInit() { }

  handleType() {
    let str = 'decrease';
    switch (this.type) {
      case 0:
        str = 'decrease';
        break;

      case 1:
        str = 'discount';
        break;

      case 2:
        str = 'special';
        break;

      case 3:
        str = 'invoice';
        break;

      case 4:
        str = 'guarantee';
        break;
    }

    return `icon-${str}`;
  }
}
