import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewHomeComponent } from './main-view-home.component';

describe('MainViewHomeComponent', () => {
  let component: MainViewHomeComponent;
  let fixture: ComponentFixture<MainViewHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainViewHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
