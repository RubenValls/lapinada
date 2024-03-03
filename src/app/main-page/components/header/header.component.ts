import { Component, Input } from '@angular/core';
import { OpenFormButtonComponent } from '../shared/open-form-button/open-form-button.component';
import { RouterModule } from '@angular/router';
import { BackToMainPageButtonComponent } from '../shared/back-to-main-page-button/back-to-main-page-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    OpenFormButtonComponent,
    BackToMainPageButtonComponent,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() isThanks: boolean = false;
}
