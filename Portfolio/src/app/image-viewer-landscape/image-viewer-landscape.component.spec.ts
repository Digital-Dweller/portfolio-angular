import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageViewerLandscapeComponent } from './image-viewer-landscape.component';

describe('ImageViewerLandscapeComponent', () => {
  let component: ImageViewerLandscapeComponent;
  let fixture: ComponentFixture<ImageViewerLandscapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageViewerLandscapeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageViewerLandscapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
