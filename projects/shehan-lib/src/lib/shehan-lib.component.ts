import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shehan-lib',
  template: `
    <p>
      shehan-lib works!
    </p>
  `,
  styles: [
  ]
})
export class ShehanLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Huree');
  }

  public testMethod(): void{
    console.log('test working');
  }

}
