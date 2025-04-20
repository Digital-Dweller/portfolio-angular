import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorywinappComponent } from './inventorywinapp.component';

describe('InventorywinappComponent', () => {
  let component: InventorywinappComponent;
  let fixture: ComponentFixture<InventorywinappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventorywinappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventorywinappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
