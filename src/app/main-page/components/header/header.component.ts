import { Component } from '@angular/core';
import { OpenFormButtonComponent } from '../shared/open-form-button/open-form-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    OpenFormButtonComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
