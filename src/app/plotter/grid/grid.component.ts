import { Component, OnInit } from '@angular/core';

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

  ngOnInit() {
    this.loadGrid();
  }

  addBox(x: number, y: number) {
    this.boxes.push({
      position: {
        x,
        y,
      },
    });
  }

  loadGrid() {
    this.plotterService.loadGrid().subscribe((doc) => {
      if (doc.exists) {
        const boxes = doc.data().boxes;
        boxes.forEach((box) => {
          this.addBox(box.x, box.y);
        });
      } else {
        console.error('No document exists');
      }
    });
  }

  saveGrid() {
    this.plotterService.saveGrid(this.boxPositions);
  }

  updateBox(event) {
    this.boxPositions.push(event);
  }
}
