import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderSubPagesComponent } from '../../Components/header-sub-pages/header-sub-pages.component';
import { Router } from '@angular/router';
interface Project {
  name: string,
  description: string,
  url: string,
  tools: string[],
  images: string[]
}
@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, HeaderSubPagesComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})

export class WorksComponent {
  constructor(private router: Router) { }
  work: Project[] = [

    {
      name: "Portfolio",
      description: "portfolio for show your works and ease to contact with you",
      tools: ['Angulaar 17', 'bootstrap 5'],
      url: "https://github.com/Houda-Farrag/Dashboard-Dubizzle",
      images: ["https://www.bing.com/images/blob?bcid=RPBMSNzNMxIHufXBWVC4JxV49hsT.....70"]
    },

  ]
  goToGitHub(url: string) {
    this.router.navigate([url])
  }
}
