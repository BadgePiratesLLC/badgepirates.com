import { Component, OnInit } from '@angular/core';
import { HACKERPROFILES } from './hackers';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less'],
})
export class AboutComponent implements OnInit {

  hackers = HACKERPROFILES

  constructor() {}

  ngOnInit() {
  }

}
