import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../Components/header/header.component';
import { AngularPageComponent } from '../angular-page/angular-page.component';
import { SideLeftComponent } from '../../Components/side-left/side-left.component';
import { SideRightComponent } from '../../Components/side-right/side-right.component';
import { FieldDescriptionComponent } from '../../Components/field-description/field-description.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AngularPageComponent, SideLeftComponent, SideRightComponent, FieldDescriptionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  Filed = [
    {
      title: "web", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\
    Quos nihil tempora quod molestiae nisi provident minima adipisci quisquam sit,\
    animi blanditiis doloribus aliquid, assumenda dolor nulla? Recusandae debitis est itaque.", icon: "fa fa-facebook", color: '#198754'
    },
    { title: "web2", description: "leorem absum", icon: "fa fa-facebook", color: '#198722' },
    { title: "web3", description: "leorem absum", icon: "fa fa-facebook", color: '#115754' },
  ]

}
