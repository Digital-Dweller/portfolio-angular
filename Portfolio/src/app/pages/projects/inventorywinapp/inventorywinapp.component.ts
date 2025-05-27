import { Component } from '@angular/core';

@Component({
  selector: 'app-inventorywinapp',
  standalone: false,
  templateUrl: './inventorywinapp.component.html',
  styleUrl: './inventorywinapp.component.scss'
})
export class InventorywinappComponent {
  componentImages: string[] = [
    'resources/invManager/invMan_screenshot1.jpg',
    'resources/invManager/invMan_screenshot2.jpg',
    'resources/invManager/invMan_screenshot3.jpg',
    'resources/invManager/invMan_screenshot4.jpg',
    'resources/invManager/invMan_screenshot5.jpg',
    'resources/invManager/invMan_screenshot6.jpg'
  ];
}
