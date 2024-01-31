import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content/main-content.component';
import { ImpressumComponent } from './impressum/impressum.component';

export const routes: Routes = [
{path: '', component: MainContentComponent},
{path: 'impressum', component: ImpressumComponent},
];
