import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  styles: [':host {font-size: 0}']
})
export class IconComponent {
  @Input() type = 0;
  @Input() size = false;

  handleType() {
    let str = '';
    switch (this.type) {
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

      default:
        str = 'decrease';
    }

    return `icon-${str}`;
  }
}
