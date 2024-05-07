import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-angular-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './angular-page.component.html',
  styleUrl: './angular-page.component.css'
})
export class AngularPageComponent {
  title = 'Portfolio';
}
