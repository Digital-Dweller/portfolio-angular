import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  standalone: false,
  templateUrl: './image-viewer.component.html',
  styleUrl: './image-viewer.component.css'
})
export class ImageViewerComponent {
  @Input() viewerImages: string[] = [];
  currentIndex = 0;

  get currentImage(): string {
    return this.viewerImages[this.currentIndex];
  }
  nextImage() {
    if (this.currentIndex < this.viewerImages.length - 1) {
      this.currentIndex++;
    }
  }
  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
