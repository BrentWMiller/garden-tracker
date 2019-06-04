import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

// components
import { GridComponent } from './grid/grid.component';
import { BoxComponent } from './box/box.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: GridComponent,
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [GridComponent, BoxComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    DragDropModule,
  ]
})
export class PlotterModule { }
