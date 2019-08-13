import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PlotFormComponent } from '../plot-form/plot-form.component';
import { PlotterService } from '../plotter.service';
import { Plot } from '../interfaces/plot.interface';

@Component({
  selector: 'gt-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  plots: Array<Plot>;

  constructor(private dialog: MatDialog, private plotterService: PlotterService) {
    this.plotterService.getPlots().subscribe((plots) => {
      this.plots = plots;
    });
  }

  ngOnInit() {}

  openPlotForm(plot?: Plot) {
    const dialogRef = this.dialog.open(PlotFormComponent, {
      width: '960px',
      data: plot ? plot : null,
    });

    dialogRef.componentInstance.saveEvent.subscribe((event) => {
      this.createPlot(event);
    });

    dialogRef.afterClosed().subscribe(() => {
      dialogRef.componentInstance.saveEvent.unsubscribe();
    });
  }

  async createPlot(plot: Plot) {
    await this.plotterService.createPlot(plot);
    this.dialog.closeAll();
  }
}
