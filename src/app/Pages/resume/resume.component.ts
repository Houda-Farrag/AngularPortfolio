import { Component } from '@angular/core';
import { FieldDescriptionComponent } from '../../Components/field-description/field-description.component';
import { SkillsComponent } from '../../Components/skills/skills.component';
import { EducaInternComponent } from '../../Components/educa-intern/educa-intern.component';
import { HeaderSubPagesComponent } from '../../Components/header-sub-pages/header-sub-pages.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [FieldDescriptionComponent, SkillsComponent, EducaInternComponent, HeaderSubPagesComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  Techskills = [
    { name: 'html / html5', percentage: '80', color: 'gray' },
    { name: 'Css / css3', percentage: '70', color: 'gray' },
    { name: 'javascript', percentage: '80', color: 'gray' },
    { name: 'Angular', percentage: '60', color: 'gray' },
    { name: 'Bootstrap', percentage: '60', color: 'gray' },
  ]
  SoftSkills = [
    { name: 'Communication', percentage: '90', color: 'gray' },
    { name: 'Adaptability', percentage: '90', color: 'gray' },
    { name: 'Emotional Intelligence', percentage: '80', color: 'gray' },
    { name: 'organizational skills', percentage: '60', color: 'gray' },
    { name: 'Writing', percentage: '60', color: 'gray' },
  ]

  Certificate = [{
    title: "Education",
    content: "Bachelor's degree of Computer Science,Faculty of Computers and Information, Luxor University",
    icon: "fa fab fas fa-graduation-cap", date: '2019/09 – 2023/07'
  }, {
    title: "Internship",
    content: "Code Camp (ICC), Information Technology Institute (ITI),Full Stack Development (MEARN) MongoDB, Express.js, Angular.js, React.js, Node.js",
    icon: "fa  fas fa-user", date: '2023/11 – 2024/04'
  }]
}
