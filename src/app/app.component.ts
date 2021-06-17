import { Component, OnInit } from '@angular/core';
import { ShehanLibService  } from 'shehan-lib';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-root',
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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'first-library';

  constructor(private t : ShehanLibService){

  }

  ngOnInit():void{

  }

  clickMe(){
    this.t.hure();
  }

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
