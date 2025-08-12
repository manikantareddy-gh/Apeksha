import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './main/components/navbar/navbar';
import { Login } from './main/components/login/login';
import { Register } from './main/components/register/register';
import { Footer } from './main/components/footer/footer';
import { Home } from './main/home/home';
import { StdDashboard } from './student/std-dashboard/std-dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Login, Register, Footer,StdDashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('apeksha_app');
}
