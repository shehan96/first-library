import { NgModule } from '@angular/core';
import { ShehanLibComponent } from './shehan-lib.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ShehanLibComponent
  ],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [
    ShehanLibComponent
  ]
})
export class ShehanLibModule { }
