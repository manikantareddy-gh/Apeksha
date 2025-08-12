import { Component } from '@angular/core';
import { Login } from '../components/login/login';
import { Register } from '../components/register/register';
import { Navbar } from '../components/navbar/navbar';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Navbar,Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
