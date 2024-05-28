
import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { CONDUCTEURS } from '../../mock-conducteurs';
import { Conduc } from '../../conduc'; 
import { RouterModule, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
/*import { BorderCardDirective } from '../border-card.directive';*/

@Component({
    selector: 'app-liste-conducteurs',
    templateUrl: './liste-conducteurs.component.html',
    styleUrls: ['./liste-conducteurs.css'],
    imports: [RouterModule, RouterOutlet, RouterLink /*BorderCardDirective*/,ListeConducteursComponent,CommonModule,RouterLinkActive],
    standalone: true,
})

export class ListeConducteursComponent {
  conducteur: Conduc[] = CONDUCTEURS;
  ngOnInit() {
    console.log(this.conducteur);
  }
}

