import { Component } from '@angular/core';
import { StdHome } from '../std-home/std-home';
import { Footer } from '../../main/components/footer/footer';

@Component({
  selector: 'app-std-dashboard',
  imports: [StdHome,Footer],
  templateUrl: './std-dashboard.html',
  styleUrl: './std-dashboard.css'
})
export class StdDashboard {

}
