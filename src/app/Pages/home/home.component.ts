import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../Components/header/header.component';
import { AngularPageComponent } from '../angular-page/angular-page.component';
import { SideLeftComponent } from '../../Components/side-left/side-left.component';
import { SideRightComponent } from '../../Components/side-right/side-right.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AngularPageComponent, SideLeftComponent, SideRightComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {




}
