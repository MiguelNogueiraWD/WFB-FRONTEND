
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { CONDUCTEURS } from '../mock-conducteurs';
import { Conduc } from '../conduc'; 
import { RouterModule, RouterOutlet, ActivatedRoute } from '@angular/router';
import { BorderCardDirective } from '../border-card.directive';


@Component({
  selector: 'app-liste-conducteurs',
  templateUrl: './liste-conducteurs.component.html',
  styleUrls: ['./liste-conducteurs.css'],
})
export class ListeConducteursComponent {
  conducteur: Conduc[] = CONDUCTEURS;
  ngOnInit() {
    console.log(this.conducteur);
  }
}
  @NgModule({
    declarations: [
      ListeConducteursComponent,BorderCardDirective
    ],
    imports: [
      CommonModule,
      RouterModule
    ],
    exports: [
      BorderCardDirective
    ]
  })

export class ListeConducteursModule { }