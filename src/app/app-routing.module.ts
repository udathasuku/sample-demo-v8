import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { GridNewComponent } from './grid-new/grid-new.component';

const routes: Routes = [
  { path: '',  component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'teacher-view', component: TeacherViewComponent },
  {path: 'grid-new', component:GridNewComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
