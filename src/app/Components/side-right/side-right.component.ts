import { Component } from '@angular/core';
import { SideRightLinksComponent } from '../side-right-links/side-right-links.component';

@Component({
  selector: 'app-side-right',
  standalone: true,
  imports: [SideRightLinksComponent],
  templateUrl: './side-right.component.html',
  styleUrl: './side-right.component.css'
})
export class SideRightComponent {

  linksContent = [
    { icon: 'fa fa-user', route: 'home', conten: 'about' },
    { icon: 'fa far fa-address-book', route: 'resume', conten: 'resume' },
    { icon: 'fa fas fa-briefcase', route: 'works', conten: 'works' },
    { icon: 'fa far fa-address-book', route: 'contact', conten: 'contact' }

  ]
}
