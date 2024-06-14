import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-barnav',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl:'./barnav.component.html', 
  styleUrls: ['./barnav.component.css']
})
export class BarnavComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isLoggedIn(): boolean {
    return typeof window !== 'undefined' && this.authService.isLoggedIn();  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/connexion']);
  }

}
