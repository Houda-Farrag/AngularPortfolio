import { Routes } from '@angular/router';
import { AngularPageComponent } from './Pages/angular-page/angular-page.component';
import { HomeComponent } from './Pages/home/home.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { WorksComponent } from './Pages/works/works.component';
import { ResumeComponent } from './Pages/resume/resume.component';
import { TestsliderComponent } from './Pages/testslider/testslider.component';

export const routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'angular-page', component: AngularPageComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'works', component: WorksComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'slider', component: TestsliderComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: NotFoundPageComponent },
];
