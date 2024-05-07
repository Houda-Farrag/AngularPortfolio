import { Component } from '@angular/core';
import { SochialLinkComponent } from '../sochial-link/sochial-link.component';

@Component({
  selector: 'app-side-left',
  standalone: true,
  imports: [SochialLinkComponent],
  templateUrl: './side-left.component.html',
  styleUrl: './side-left.component.css'
})
export class SideLeftComponent {
  links = [
    { icon: "fa-whatsapp", url: "https://wa.me/+201145446520", color: "green" },
    { icon: "fa-linkedin", url: "https://www.linkedin.com/in/mahmoud-farraj/", color: "#2f57db" },
    { icon: "fa-facebook-f", url: "https://www.facebook.com/profile.php?id=100059477820248", color: "black" },
    { icon: "fa-at", url: "mailto:Mahmoud.Mo.Farrag@outlook.com", color: "#c71c39" }

  ]
}
