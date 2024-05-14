import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CONDUCTEURS } from '../mock-conducteurs';
import { Conduc } from '../conduc'; 


@Component({
  selector: 'app-liste-conducteurs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-conducteurs.component.html',
  styleUrls: ['./liste-conducteurs.css'],
})
export class ListeConducteursComponent {
  conducteur: Conduc[] = CONDUCTEURS;
  ngOnInit() {
    console.log(this.conducteur);
  }

}
