
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1, "autoplay": true, "autoplaySpeed": 2000 ,"dots": true,
  "infinite": true  };

  slides = [
    { img: "assets/Img/avion.webp" },
    { img: "assets/Img/aeroport.webp" },
    { img: "assets/Img/Navette.webp" }
  ];
}
