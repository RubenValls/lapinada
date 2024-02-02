import { Attribute, Component } from '@angular/core';

@Component({
  selector: 'app-hero-text',
  standalone: true,
  imports: [],
  templateUrl: './hero-text.component.html',
  styleUrl: './hero-text.component.scss'
})
export class HeroTextComponent {

  constructor(
    @Attribute('header') public header: string,
    @Attribute('subHeader') public subHeader: string
  ) {}

}
