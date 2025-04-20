import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipekeeperComponent } from './recipekeeper.component';

describe('RecipekeeperComponent', () => {
  let component: RecipekeeperComponent;
  let fixture: ComponentFixture<RecipekeeperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipekeeperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipekeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
