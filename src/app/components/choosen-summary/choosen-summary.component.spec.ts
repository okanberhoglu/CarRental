import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosenSummaryComponent } from './choosen-summary.component';

describe('ChoosenSummaryComponent', () => {
  let component: ChoosenSummaryComponent;
  let fixture: ComponentFixture<ChoosenSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosenSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosenSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
