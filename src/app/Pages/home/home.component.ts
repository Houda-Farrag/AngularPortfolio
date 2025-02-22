import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../Components/header/header.component';
import { AngularPageComponent } from '../angular-page/angular-page.component';
import { SideLeftComponent } from '../../Components/side-left/side-left.component';
import { SideRightComponent } from '../../Components/side-right/side-right.component';
import { FieldDescriptionComponent } from '../../Components/field-description/field-description.component';
import { HeaderSubPagesComponent } from '../../Components/header-sub-pages/header-sub-pages.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AngularPageComponent, SideLeftComponent, SideRightComponent, FieldDescriptionComponent, HeaderSubPagesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  Filed = [
    {
      title: "front end development", description: "specialize in building the visual and interactive components of websites and web applications.\
     with skills: HTML/CSS, JavaScript, Responsive Web Design:", icon: "fa fa-facebook", color: '#198754'
    },
    { title: "Backend Development", description: "creating robust and efficient server-side applications. skills include: Node.js, Express.js, implementing RESTful APIs, Databases: MongoDB", icon: "fa fa-facebook", color: '#198722' },

  ]

}
