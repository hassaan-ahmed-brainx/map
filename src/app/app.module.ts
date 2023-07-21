// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WorldMapComponent } from './world-map.component'; // Update the import path

@NgModule({
  declarations: [
    AppComponent,
    WorldMapComponent, // Add WorldMapComponent to the declarations array
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

