import { Component } from '@angular/core';
import { Footer } from '../../main/components/footer/footer';
import { StdHome } from '../std-home/std-home';

@Component({
  selector: 'app-std-courses-01',
  imports: [Footer,StdHome],
  templateUrl: './std-courses-01.html',
  styleUrl: './std-courses-01.css'
})
export class StdCourses01 {

}
