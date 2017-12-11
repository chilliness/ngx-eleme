import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare let require: any;
const BScroll = require('better-scroll').default;

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit, AfterViewInit {

  @ViewChild('main') main: ElementRef;
  @ViewChild('pic') pic: ElementRef;

  like = localStorage.getItem('like') == '1' ? true : false;
  seller: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../../../assets/data.json').subscribe((res) => {
      if (res['code'] == 0) {
        this.seller = res['seller'];
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (!this['scroll']) {
        this['scroll'] = new BScroll(this.main.nativeElement, {
          click: true
        });
      } else {
        this['scroll'].refresh();
      }

      if (!this['scrollX']) {
        this['scrollX'] = new BScroll(this.pic.nativeElement, {
          scrollX: true,
          scrollY: false
        });
      } else {
        this['scrollX'].refresh();
      }
    }, 300);
  }

  onToggleLike() {
    this.like = !this.like;
    localStorage.setItem('like', (this.like ? '1' : '0'));
  }

}
