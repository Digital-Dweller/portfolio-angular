import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  aboutImages1: string[] = [
    'resources/about_images/aboutPic1.png',
    'resources/invManager/invMan_screenshot2.jpg',
    'resources/invManager/invMan_screenshot3.jpg',
    'resources/invManager/invMan_screenshot4.jpg',
    'resources/invManager/invMan_screenshot5.jpg',
    'resources/invManager/invMan_screenshot6.jpg'
  ];
}
