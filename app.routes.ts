import { Routes } from '@angular/router';
import { DetailsConducteursComponent } from './details-conducteurs/details-conducteurs.component';
import { ListeConducteursComponent } from './liste-conducteurs/liste-conducteurs.component';

export const routes: Routes = [
    {
        path: 'details-conducteurs',
        component: DetailsConducteursComponent,
    },
    {
        path: 'liste-conducteurs',
        component: ListeConducteursComponent,
    },
];
