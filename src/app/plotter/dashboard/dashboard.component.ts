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
  constructor(private dialog: MatDialog, private plotterService: PlotterService) {}

  ngOnInit() {}

  openPlotForm() {
    const dialogRef = this.dialog.open(PlotFormComponent, {
      width: '960px',
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
