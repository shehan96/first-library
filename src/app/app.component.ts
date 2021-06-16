import { Component, OnInit } from '@angular/core';
import { ShehanLibService  } from 'shehan-lib';

@Component({
  selector: 'app-root',
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

}
