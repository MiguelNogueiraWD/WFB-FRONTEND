import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-connexion-admin',
    templateUrl: './connexion_admin.html',
    styleUrls: ['./connexion_admin.css']
})
export class ConnexionAdminComponent {
    admin_tel: string = ''; // Initialize admin_tel property
    admin_password: string = ''; 

    constructor(private apiService: ApiService, private router: Router) { }

    onSubmit() {
        this.apiService.admin_Login(this.admin_tel, this.admin_password).subscribe((isLoggedIn: boolean) => {
                if (isLoggedIn) {
                        this.router.navigate(['/moderation']);
                } else {
                        // Handle login failure
                }
        });
    }
}
