import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderSubPagesComponent } from '../../Components/header-sub-pages/header-sub-pages.component';
import { Router } from '@angular/router';
interface Project {
  name: string,
  description: string,
  urls: { github: string, demo: string },
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
      tools: ['fa fa-github', 'fa fab fa-android'],
      urls: { github: "https://github.com/Houda-Farrag/Dashboard-Dubizzle", demo: "https://github.com/Houda-Farrag/Dashboard-Dubizzle" },
      images: ["https://www.bing.com/images/blob?bcid=RPBMSNzNMxIHufXBWVC4JxV49hsT.....70"]
    },
    {
      name: "dashpoard",
      description: "portfolio for show your works and ease to contact with you",
      tools: ['fa fa-github', 'fa fab fa-android'],
      urls: { github: "https://github.com/Houda-Farrag/Dashboard-Dubizzle", demo: "https://github.com/Houda-Farrag/Dashboard-Dubizzle" },
      images: ["https://www.bing.com/images/blob?bcid=RPBMSNzNMxIHufXBWVC4JxV49hsT.....70"]
    },
    {
      name: "Portfolio",
      description: "portfolio for show your works and ease to contact with you",
      tools: ['fa fa-github', 'fa fa-github'],
      urls: { github: "https://github.com/Houda-Farrag/Dashboard-Dubizzle", demo: "https://github.com/Houda-Farrag/Dashboard-Dubizzle" },
      images: ["https://www.bing.com/images/blob?bcid=RPBMSNzNMxIHufXBWVC4JxV49hsT.....70"]
    },
  ]

}
