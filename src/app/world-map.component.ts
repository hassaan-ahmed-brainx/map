// world-map.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent {
  showPopup: boolean = false;
  popupContent: string = "Popup Content"; // You can replace this with your desired popup content
  popupStyles: any = {}; // Variable to set the popup styles

  onRegionHover(region: string) {
    if (region === 'north-america') {
      this.showPopup = true;
      this.popupStyles = {
        color: '#000', // Change the text color to black for better visibility
        'font-weight': 'bold' // Make the text bold for emphasis
      };
    }
  }

  onRegionLeave(region: string) {
    if (region === 'north-america') {
      this.showPopup = false;
    }
  }
}
