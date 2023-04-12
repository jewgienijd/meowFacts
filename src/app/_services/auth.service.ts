import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login() {
    localStorage.setItem('loggedIn', 'true');
  }

  logout() {
    localStorage.setItem('loggedIn', 'false');
  }
}
