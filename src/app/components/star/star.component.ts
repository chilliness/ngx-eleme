import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
  styles: [':host {font-size: 0}']
})
export class StarComponent {
  @Input() size = 6;
  @Input() score = 5;
  @Input() count = 5;

  handleCount() {
    return Array(this.count).fill('');
  }

  handleBy(index) {
    return index;
  }
}
