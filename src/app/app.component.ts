import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Pages/home/home.component';
import { SideLeftComponent } from './Components/side-left/side-left.component';
import { SideRightComponent } from './Components/side-right/side-right.component';
import { WorksComponent } from './Pages/works/works.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ResumeComponent } from './Pages/resume/resume.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TestsliderComponent } from './Pages/testslider/testslider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    HeaderComponent,
    SideLeftComponent,
    SideRightComponent,
    WorksComponent,
    ContactComponent,
    ResumeComponent,
    FooterComponent, TestsliderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}
