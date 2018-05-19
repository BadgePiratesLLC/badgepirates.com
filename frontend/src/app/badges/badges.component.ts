import { Component, OnInit } from '@angular/core';
import { BADGES } from './badges';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.less'],
})
export class BadgesComponent implements OnInit {

  badges = BADGES

  constructor() { }

  ngOnInit() {
  }

}
