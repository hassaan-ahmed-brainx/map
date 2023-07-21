import { Component } from '@angular/core';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent {
  onMapClick(event: MouseEvent) {
    // Handle the click event here
    const target = event.target as HTMLElement;
    const regionId = target.id;

    if (regionId === 'asia') {
      // Code to color other regions when Asia is clicked
      document.getElementById('north-america').style.fill = 'lightgrey';
      document.getElementById('south-america').style.fill = 'lightgrey';
      document.getElementById('africa').style.fill = 'lightgrey';
      document.getElementById('europe').style.fill = 'lightgrey';
      document.getElementById('australia').style.fill = 'lightgrey';
    }

    // Add similar handling for other regions if required
  }
}

