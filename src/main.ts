import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { ConnexionComponent } from './app/composants/connexion/connexion.component';

bootstrapApplication(ConnexionComponent, {
  providers: [provideHttpClient()]
}).catch(err => console.error(err));