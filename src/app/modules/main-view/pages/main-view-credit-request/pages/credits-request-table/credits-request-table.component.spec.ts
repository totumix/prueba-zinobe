import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsRequestTableComponent } from './credits-request-table.component';

describe('CreditsRequestTableComponent', () => {
  let component: CreditsRequestTableComponent;
  let fixture: ComponentFixture<CreditsRequestTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditsRequestTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsRequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
