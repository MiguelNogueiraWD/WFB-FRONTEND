
import { Routes } from '@angular/router';
import { DetailsConducteursComponent } from './composants/details-conducteurs/details-conducteurs.component';
import { ListeConducteursComponent } from './composants/liste-conducteurs/liste-conducteurs.component';
import { ConnexionComponent } from './composants/connexion/connexion.component';
import { HorairesComponent } from './composants/horaires/horaires.component';
import { AccueilComponent } from './Accueil/Accueil';
import { ModerationComponent } from './composants/moderation/moderation.component';
import { MissionComponent } from './composants/mission-component/mission.component';
import { AuthGuard } from './guards/auth.gard';
import { ConnexionAdminComponent } from './composants/connexion/admins/connexion_admin';
import { MissionListComponent } from './composants/mission-component/mission-list/mission-list';
import { MissionCreateComponent } from './composants/mission-component/mission-create/mission-create';
import { MissionDetailComponent } from './composants/mission-component/mission-detail/mission-detail';
import { MissionUpdateComponent } from './composants/mission-component/mission-update/mission-update'; 
import { LoginChauffeurComponent } from './composants/connexion/chauffeurs/connexion_chauffeur';
import { BusDetailComponent } from './composants/bus/bus-detail/bus-detail.component';
import { BusCreateComponent } from './composants/bus/bus-create/bus-create.component';

export const routes: Routes = [
    { 
        path: 'Accueil', 
        component: AccueilComponent,
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
     {
     path: 'mission',
     component: MissionComponent},

     { path: '', redirectTo: '/Accueil', pathMatch: 'full' },
     
    { path: 'moderation',
     component: ModerationComponent},//, canActivate: [authGuard]},

     { path: 'missions/create', 
     component: MissionCreateComponent, 
     canActivate: [AuthGuard] },

     { path: 'missions/edit/:id', 
        component: MissionUpdateComponent, 
        canActivate: [AuthGuard] },

     {path: 'login',
     component: ConnexionAdminComponent
     },

     {path: 'login/chauffeur',
     component: LoginChauffeurComponent
     },

     { path: 'missions', 
     component: MissionListComponent, 
     canActivate: [AuthGuard] },

     { path: 'missions/:id', 
     component: MissionDetailComponent, 
     canActivate: [AuthGuard] },

     { path: 'missions/edit/:id', 
     component: MissionUpdateComponent, 
     canActivate: [AuthGuard] },

     { path: 'buses/:id', 
     component: BusDetailComponent,
     canActivate: [AuthGuard] },
    
     { path: 'buses/create', 
        component: BusCreateComponent, 
        canActivate: [AuthGuard] },
    
];
