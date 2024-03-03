import { Component } from '@angular/core';
import { HeaderComponent } from '../../main-page/components/header/header.component';

@Component({
  selector: 'app-thanks-page',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './thanks-page.component.html',
  styleUrl: './thanks-page.component.scss'
})
export class ThanksPageComponent {

}
