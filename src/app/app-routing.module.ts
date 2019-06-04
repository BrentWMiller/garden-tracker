import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// guards
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'plotter',
    loadChildren: './plotter/plotter.module#PlotterModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
