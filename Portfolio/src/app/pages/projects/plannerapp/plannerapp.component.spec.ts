import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerappComponent } from './plannerapp.component';

describe('PlannerappComponent', () => {
  let component: PlannerappComponent;
  let fixture: ComponentFixture<PlannerappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlannerappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannerappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
