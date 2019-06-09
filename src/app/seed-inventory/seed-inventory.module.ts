import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// modules
import { SharedModule } from '../shared/shared.module';

// components
import { InventoryComponent } from './inventory/inventory.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: InventoryComponent,
  },
  // {
  //   path: 'seed/:sid',
  //   component: GridComponent,
  // },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [InventoryComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule],
})
export class SeedInventoryModule {}
