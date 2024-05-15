import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details-conducteurs',
  standalone: true,
  imports: [],
  templateUrl: './details-conducteurs.component.html',
  styles: ``
})
export class DetailsConducteursComponent {
  constructor(private route: ActivatedRoute) { }

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    let id = params.get('id');
    // Utilisez l'ID pour obtenir les détails du conducteur
  });
}

}