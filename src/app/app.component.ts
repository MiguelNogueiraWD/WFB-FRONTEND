import { Component, OnInit} from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CONDUCTEURS } from './mock-conducteurs';
import { Conduc } from './conduc';
import { CommonModule } from '@angular/common';
import { BarnavComponent } from './composants/barnav/barnav.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, BarnavComponent,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  implements OnInit {
  liste: Conduc[] = CONDUCTEURS;
  ngOnInit() {
    console.table(this.liste);            //pour afficher les données dans la console de la liste des conducteurs
    this.selectliste(this.liste[0]);
  }

  selectliste(conducteurs: Conduc) {                                                
    console.log(`vous avez cliqué sur la navette de ${conducteurs.ConducName}`); 
}
}