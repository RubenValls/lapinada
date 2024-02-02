import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ImagesSliderComponent } from './components/images-slider/images-slider.component';
import { HeroTextComponent } from './components/hero-text/hero-text.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { FeatureCardComponent } from './components/shared/feature-card/feature-card.component';
import { featureCardData } from './components/shared/feature-card/cards-data';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeaderComponent,
    ImagesSliderComponent,
    HeroTextComponent,
    GoogleMapComponent,
    FeatureCardComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  featureCardData = [...featureCardData]

}
