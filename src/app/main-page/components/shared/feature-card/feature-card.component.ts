import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [],
  templateUrl: './feature-card.component.html',
  styleUrl: './feature-card.component.scss'
})
export class FeatureCardComponent {
  @Input() icon: string | undefined;
  @Input() title: string | undefined;
  @Input() text: string | undefined;
  
  constructor() {}
  
}
