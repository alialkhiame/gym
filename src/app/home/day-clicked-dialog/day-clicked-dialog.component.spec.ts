import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayClickedDialogComponent } from './day-clicked-dialog.component';

describe('DayClickedDialogComponent', () => {
  let component: DayClickedDialogComponent;
  let fixture: ComponentFixture<DayClickedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayClickedDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DayClickedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
