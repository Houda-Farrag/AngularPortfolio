import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-educa-intern',
  standalone: true,
  imports: [],
  templateUrl: './educa-intern.component.html',
  styleUrl: './educa-intern.component.css'
})
export class EducaInternComponent {
  @Input() data!: { title: string, content: string, icon: string, date: string }
}
