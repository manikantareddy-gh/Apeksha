import { Routes } from '@angular/router';
import { Home } from './main/home/home';
import { StdDashboard } from './student/std-dashboard/std-dashboard';
import { StdHome } from './student/std-home/std-home';
import { StdRegistrations } from './student/std-registrations/std-registrations';
import { StdCourses } from './student/std-courses/std-courses';
import { StdProfile } from './student/std-profile/std-profile';
import { StdCourses01 } from './student/std-courses-01/std-courses-01';
import { StdUpdateprofile } from './student/std-updateprofile/std-updateprofile';

export const routes: Routes = [{
    path: '',
    component:Home
},{
    path: 'std_dashboard',
    component: StdDashboard
},{
    path: 'std_home',
    component: StdHome
},{
    path: 'std_registrations',
    component: StdRegistrations
},{
    path: 'std_courses',
    component: StdCourses
},{
    path: 'std_profile',
    component: StdProfile
},{
    path:'std_courses_01',
    component: StdCourses01
},{
    path: 'std_updateprofile',
    component: StdUpdateprofile
}];
