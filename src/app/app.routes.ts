import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MemoriesComponent } from './memories/memories.component';

export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'memories', component: MemoriesComponent },
];