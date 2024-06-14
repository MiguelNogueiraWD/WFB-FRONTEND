// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { ChauffeurService } from './app/services/chauffeur.service';
import { BusService } from './app/services/bus.service';
import { VolService } from './app/services/vol.service';
import { MissionService } from './app/services/mission.service';
import { AuthService } from './app/services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './app/interceptors/auth.interceptors';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthService,
    ChauffeurService,
    BusService,
    VolService,
    MissionService
  ]
});
