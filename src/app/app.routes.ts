
import { Routes } from '@angular/router';
import { DetailsConducteursComponent } from './composants/details-conducteurs/details-conducteurs.component';
import { ListeConducteursComponent } from './composants/liste-conducteurs/liste-conducteurs.component';
import { ConnexionComponent } from './composants/connexion/connexion.component';
import { HorairesComponent } from './composants/horaires/horaires.component';
import { AppComponent } from './app.component';
import { ModerationComponent } from './composants/moderation/moderation.component';

export const routes: Routes = [
    { 
        path: 'Accueil', 
        component: AppComponent,
    },
    {
        path: 'details-conducteurs',
        component: DetailsConducteursComponent,
    },
    {
        path: 'liste-conducteurs',
        component: ListeConducteursComponent,
    },
    {
        path: 'connexion' ,
        component: ConnexionComponent,
    },
    {
        path: 'horaires',
        component: HorairesComponent,
    },
    { path: 'details-conducteurs/:id',
     component: DetailsConducteursComponent },
     
    { path: 'moderation',
     component: ModerationComponent },
    
];
