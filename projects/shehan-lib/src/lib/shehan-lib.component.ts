import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

export interface IImages {
  imageUrl: string;
  imageLabel: string;
  imageName ?: string;
  imageDes ?: string;
  imageLink ?: string;
}

export interface IOptions {
}

@Component({
  selector: 'lib-shehan-lib',
  templateUrl: './shehan-lib.component.html',
  styleUrls: [ './shehan-lib.component.css' ],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: '#c6ecff'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})

export class ShehanLibComponent implements OnInit {

  // define variables
  @Input() images : IImages[];
  @Input() options : IOptions;
  @Input() labels : string[];

  constructor() { }

  ngOnInit(): void {
  }

}
