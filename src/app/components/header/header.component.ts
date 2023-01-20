import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenServiceService } from 'src/app/services/auten-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private autService:AutenServiceService, private router:Router){ }
  logout(): void {
    this.autService.logout();
    this.router.navigate(['/login']);
 }

}
