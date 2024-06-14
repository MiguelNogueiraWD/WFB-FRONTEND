import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, ActivatedRoute, RouterLinkActive} from '@angular/router';
import { ConducteurService } from '../../services/conducteur_service';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details-conducteurs',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, CommonModule, HttpClientModule],
  providers: [ConducteurService,HttpClientModule],
  templateUrl: './details-conducteurs.component.html',
  styles: ``
})
export class DetailsConducteursComponent implements OnInit{
  conducteur: any;
  constructor(private route: ActivatedRoute,private conducteurService: ConducteurService)
   { }

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    let id = params.get('id');
    if (id !== null) {
      this.getConducteurDetails(id);
    } else {
      // Gérez le cas où id est null
    }
  });

}
getConducteurDetails(id: string) {
  this.conducteurService.getConducteur(id).subscribe(conducteur => {
    this.conducteur = conducteur;
  });
}
}
