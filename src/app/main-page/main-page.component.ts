import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ImagesSliderComponent } from './components/images-slider/images-slider.component';
import { HeroTextComponent } from './components/hero-text/hero-text.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeaderComponent,
    ImagesSliderComponent,
    HeroTextComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
