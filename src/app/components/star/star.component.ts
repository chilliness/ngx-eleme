import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
  styles: [':host {font-size: 0}']
})
export class StarComponent implements OnInit {
  @Input() size = 6;
  @Input() score = 5;
  @Input() count = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() { }
}
