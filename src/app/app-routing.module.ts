import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CandidatesComponent } from './candidates/candidates.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'candidates', component: CandidatesComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
