import { Routes } from '@angular/router';
import { DetailsConducteursComponent } from './details-conducteurs/details-conducteurs.component';
import { ListeConducteursComponent } from './liste-conducteurs/liste-conducteurs.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HorairesComponent } from './horaires/horaires.component';

export const routes: Routes = [
    {
        path: 'details-conducteurs',
        component: DetailsConducteursComponent,
    },
    {
        path: 'liste-conducteurs',
        component: ListeConducteursComponent,
    },
    {
        path: 'connexion',
        component: ConnexionComponent,
    },
    {
        path: 'horaires',
        component: HorairesComponent,
    },
    { path: 'details-conducteurs/:id', component: DetailsConducteursComponent },
];
