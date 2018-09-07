import {Component, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: require('./pages.html')
})
export class PagesComponent {

  constructor() {
  }

  ngOnInit() {
  }
}
