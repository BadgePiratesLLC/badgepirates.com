import {Component, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: require('./main.html')
})
export class MainComponent {

  constructor() {
  }

  ngOnInit() {
  }
}
