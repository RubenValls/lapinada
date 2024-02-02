import { Component } from '@angular/core';
import { OpenFormButtonComponent } from '../shared/open-form-button/open-form-button.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    OpenFormButtonComponent,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
}
