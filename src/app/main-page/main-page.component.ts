import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ImagesSliderComponent } from './components/images-slider/images-slider.component';
import { HeroTextComponent } from './components/hero-text/hero-text.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { FeatureCardComponent } from './components/shared/feature-card/feature-card.component';
import { featureCardData } from './components/shared/feature-card/cards-data';
import { ListItemComponent } from './components/shared/list-item/list-item.component';
import { listItemData } from './components/shared/list-item/list-item-data';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeaderComponent,
    ImagesSliderComponent,
    HeroTextComponent,
    GoogleMapComponent,
    FeatureCardComponent,
    ListItemComponent,
    ContactFormComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  featureCardData = [...featureCardData]
  listItemData = [...listItemData]

}
