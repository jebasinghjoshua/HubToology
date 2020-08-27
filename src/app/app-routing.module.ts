import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HomeComponent } from './home/home/home.component';


const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'home', component: HomeComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
