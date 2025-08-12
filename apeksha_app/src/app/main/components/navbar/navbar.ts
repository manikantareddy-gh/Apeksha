import { Component } from '@angular/core';
import { Login } from '../login/login';
import { Register } from '../register/register';

@Component({
  selector: 'app-navbar',
  imports: [Login,Register],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

}
