import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CoursefeeComponent } from './coursefee/coursefee.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  // { path: '', redirectTo: '/student-details', pathMatch: 'full' },
  // { path: 'admin', component: AdminHomeComponent, canActivate: [AdminAccessGuard] },
  // { path: 'student-list', component: StudentListComponent },
  // { path: 'student-details', component: StudentDetailsComponent },
  // {
  //   path: 'student/:id', component: StudentListComponent,
  //   children: [
  //     { path: 'course-fee', component: CoursefeeComponent }
  //   ]
  // },
  { path: 'faculty', loadChildren: () => import('./faculty/faculty.module').then(m => m.FacultyModule) },
  // { path: '**', component: PageNotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const myRoutings = [
  StudentListComponent,
  StudentDetailsComponent,
  PageNotfoundComponent,
  CoursefeeComponent
]
