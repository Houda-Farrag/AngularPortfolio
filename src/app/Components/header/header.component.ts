import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  pages = [{ url: "home", header: "Home" }, { url: 'angular-page', header: 'Angular Page' }]
  themeChange(event: Event) {
    let div = document.querySelector(".links-header")
    div?.classList.toggle('d-none')

    // (<HTMLElement>event.target).classList
  }
}
