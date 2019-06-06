import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// modules
import { SharedModule } from '../shared/shared.module';

// components
import { GridComponent } from './grid/grid.component';
import { BoxComponent } from './box/box.component';

// services
import { PlotterService } from './plotter.service';
import { BoxFormComponent } from './box/box-form/box-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlotFormComponent } from './plot-form/plot-form.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [GridComponent, BoxComponent, BoxFormComponent, DashboardComponent, PlotFormComponent],
  entryComponents: [BoxFormComponent, PlotFormComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule, DragDropModule, FormsModule, ReactiveFormsModule],
  providers: [PlotterService],
})
export class PlotterModule {}
