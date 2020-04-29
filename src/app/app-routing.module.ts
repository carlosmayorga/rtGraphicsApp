import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GotyVoteComponent } from './pages/goty-vote/goty-vote.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'goty-vote', component: GotyVoteComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
