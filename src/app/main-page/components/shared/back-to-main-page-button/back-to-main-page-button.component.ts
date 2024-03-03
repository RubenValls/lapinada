import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-back-to-main-page-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './back-to-main-page-button.component.html',
  styleUrl: './back-to-main-page-button.component.scss'
})
export class BackToMainPageButtonComponent {

}
