import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-barnav',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl:'./barnav.component.html', 
  styleUrls: ['./barnav.component.css']
})
export class BarnavComponent {

}
