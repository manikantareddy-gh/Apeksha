import { Component } from '@angular/core';
import { Footer } from '../../main/components/footer/footer';
import { StdHome } from '../std-home/std-home';

@Component({
  selector: 'app-std-courses',
  imports: [Footer,StdHome],
  templateUrl: './std-courses.html',
  styleUrl: './std-courses.css'
})
export class StdCourses {

}
