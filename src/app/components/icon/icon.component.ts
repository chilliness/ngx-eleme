import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() type = 0;
  @Input() size = 24;

  icon = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  cls = 'size-';

  constructor() { }

  ngOnInit() {
  }

}
