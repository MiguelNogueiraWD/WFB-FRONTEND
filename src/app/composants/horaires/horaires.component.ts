import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarnavComponent } from '../barnav/barnav.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-horaires',
  standalone: true,
  imports: [RouterLink, CommonModule, BarnavComponent, RouterOutlet, RouterLinkActive],
  templateUrl:'./horaires.component.html',
  styleUrls: ['./horaires.component.css']
})
export class HorairesComponent {

}
