import { Component } from '@angular/core';

@Component({
  selector: 'app-recipekeeper',
  standalone: false,
  templateUrl: './recipekeeper.component.html',
  styleUrl: './recipekeeper.component.css'
})
export class RecipekeeperComponent {
  componentImages: string[] = [
    'resources/recipekeeper/rk_screenshot1.png',
    'resources/recipekeeper/rk_screenshot2.png',
    'resources/recipekeeper/rk_screenshot3.png',
    'resources/recipekeeper/rk_screenshot4.png',
    'resources/recipekeeper/rk_screenshot5.png',
    'resources/recipekeeper/rk_screenshot6.png'
  ];
}
