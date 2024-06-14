import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive} from '@angular/router';
import { SliderComponent } from './Slider_Images/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@Component({
  selector: 'app-Accueil',
  imports: [RouterLink, RouterOutlet, RouterLinkActive, SliderComponent, SlickCarouselModule],
  standalone: true,
  templateUrl:'./Accueil.html',
  styleUrls: ['./Accueil.css']
})
export class AccueilComponent {

}
