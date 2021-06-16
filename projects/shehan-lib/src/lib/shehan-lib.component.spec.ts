import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShehanLibComponent } from './shehan-lib.component';

describe('ShehanLibComponent', () => {
  let component: ShehanLibComponent;
  let fixture: ComponentFixture<ShehanLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShehanLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShehanLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
