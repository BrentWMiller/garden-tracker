import { Component, OnInit } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';

// services
import { PlotterService } from '../plotter.service';

// interfaces
import { Box } from '../interfaces/box.interface';

@Component({
  selector: 'gt-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  boxes: Array<any> = [];
  boxPositions: Array<Box> = [];

  constructor(private plotterService: PlotterService) {}

  ngOnInit() {}

  addBox() {
    this.boxes.push(CdkDrag);
  }

  saveGrid() {
    this.plotterService.saveGrid(this.boxPositions);
  }

  updateBox(event) {
    this.boxPositions.push(event);
  }
}
