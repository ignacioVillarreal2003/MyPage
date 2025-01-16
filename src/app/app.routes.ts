import { Routes } from '@angular/router';
import { HomeComponent } from './articles/home/home.component';
import { AboutComponent } from './articles/about/about.component';
import { ProjectsComponent } from './articles/projects/projects.component';
import { ProjectView1Component } from './articles/project-view-1/project-view-1.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project-1', component: ProjectView1Component }
];
