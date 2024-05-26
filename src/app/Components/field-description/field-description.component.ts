import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
interface Filed {
  title: string, description: string, icon: string, color: string
}
@Component({
  selector: 'app-field-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './field-description.component.html',
  styleUrl: './field-description.component.css'
})
export class FieldDescriptionComponent {
  @Input() field!: Filed
}
