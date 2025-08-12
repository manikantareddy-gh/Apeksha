import { Component } from '@angular/core';
import { Footer } from '../../main/components/footer/footer';
import { StdHome } from '../std-home/std-home';

@Component({
  selector: 'app-std-registrations',
  imports: [Footer,StdHome],
  templateUrl: './std-registrations.html',
  styleUrl: './std-registrations.css'
})
export class StdRegistrations {

}
