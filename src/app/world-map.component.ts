// world-map.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent {
  onRegionHover(region: string) {
    // Handle the hover event here
    const regionElement = document.getElementById(region);
    if (regionElement) {
      regionElement.setAttribute('style', 'fill: lightgrey;');
    }
  }

  onRegionLeave(region: string) {
    // Handle the leave event here
    const regionElement = document.getElementById(region);
    if (regionElement) {
      regionElement.removeAttribute('style');
    }
  }
}

