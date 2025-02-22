import { Component, HostBinding, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-testslider',
  standalone: true,
  imports: [],
  templateUrl: './testslider.component.html',
  styleUrl: './testslider.component.css'
})
export class TestsliderComponent {
  @Input() images !: string[]
}
