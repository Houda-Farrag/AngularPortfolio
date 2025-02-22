import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-right-links',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './side-right-links.component.html',
  styleUrl: './side-right-links.component.css'
})
export class SideRightLinksComponent {
  @Input() pageLink!: { icon: string, route: string, conten: string };
}
