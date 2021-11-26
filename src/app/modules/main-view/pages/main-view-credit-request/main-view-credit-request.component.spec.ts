import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewCreditRequestComponent } from './main-view-credit-request.component';

describe('MainViewCreditRequestComponent', () => {
  let component: MainViewCreditRequestComponent;
  let fixture: ComponentFixture<MainViewCreditRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainViewCreditRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewCreditRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
