import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  // define variales
  labels : string[] = ['label 1', 'label 2', 'label 3', 'label 4'];
  options : any = {};
  images : any[] = [];

  constructor(){
  }

  ngOnInit():void{
  }

}
