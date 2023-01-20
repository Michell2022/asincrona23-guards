import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenServiceService {

  constructor() { }

  private isLoggedIn = false;
  private user: any = {};

  login(user: any): void {
    this.isLoggedIn = true;
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

}
