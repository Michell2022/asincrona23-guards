import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AutenServiceService } from '../services/auten-service.service';

@Injectable({
  providedIn: 'root'
})
export class PermisosDingresoGuard implements CanActivate {

  constructor(private autService: AutenServiceService, private router:Router){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;

    if (this.autService.isAuthenticated()) {
      
      return true;
    } else {
      this.router.navigate(['/login']);
      Swal.fire('Para ingresar, primero debe iniciar sesión')
      return false;
    }

  }
  
}
