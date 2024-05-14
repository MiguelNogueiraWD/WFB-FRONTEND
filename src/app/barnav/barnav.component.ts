import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-barnav',
  standalone: true,
  imports: [CommonModule, AppComponent, RouterModule],
  templateUrl:'./barnav.component.html', 
  styleUrls: ['./barnav.component.css']
})
export class BarnavComponent {

}
