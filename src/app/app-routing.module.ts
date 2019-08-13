import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// guards
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'plotter',
    loadChildren: () => import('./plotter/plotter.module').then(m => m.PlotterModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'seeds',
    loadChildren: () => import('./seed-inventory/seed-inventory.module').then(m => m.SeedInventoryModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
