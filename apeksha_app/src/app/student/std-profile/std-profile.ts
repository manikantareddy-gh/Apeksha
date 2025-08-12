import { Component } from '@angular/core';
import { Navbar } from '../../main/components/navbar/navbar';
import { Footer } from '../../main/components/footer/footer';
import { StdHome } from '../std-home/std-home';

@Component({
  selector: 'app-std-profile',
  imports: [StdHome,Footer],
  templateUrl: './std-profile.html',
  styleUrl: './std-profile.css'
})
export class StdProfile {

}
