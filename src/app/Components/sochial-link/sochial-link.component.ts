import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sochial-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sochial-link.component.html',
  styleUrl: './sochial-link.component.css'
})
export class SochialLinkComponent {
  @Input() iconLink!: { icon: string, url: string, color: string }
}
