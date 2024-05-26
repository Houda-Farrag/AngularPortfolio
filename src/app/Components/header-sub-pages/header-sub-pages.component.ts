import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-sub-pages',
  standalone: true,
  imports: [],
  templateUrl: './header-sub-pages.component.html',
  styleUrl: './header-sub-pages.component.css'
})
export class HeaderSubPagesComponent {
  @Input() headerTitle!: string
}
