import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CONDUCTEURS } from './mock-conducteurs';
import { Conduc } from './conduc';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>liste des conducteurs</h1>
    <p>Voici les conducteurs de navette</p>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  liste: Conduc[] = CONDUCTEURS;

  ngOnInit() {
    console.table(this.liste);
    this.selectliste(this.liste[0]);
  }

  selectliste(conducteurs: Conduc) {
    console.log(`vous avez cliqué sur la navette de ${conducteurs.ConducName}`); 
}
}