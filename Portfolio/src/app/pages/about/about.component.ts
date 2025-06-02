import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  aboutImages1: string[] = [
    'resources/about_images/pcb2.JPG',
    'resources/about_images/pcb1.JPG',
    'resources/about_images/schematic.JPG',
    'resources/about_images/enclosure1.JPG',
    'resources/about_images/enclosure2.JPG',
    'resources/about_images/wireframe.jpg',
    'resources/about_images/codeSample1.JPG',
    'resources/about_images/codeSample2.JPG',
    'resources/about_images/codeSample3.JPG',
    'resources/about_images/codeSample4.JPG'
  ];
}
