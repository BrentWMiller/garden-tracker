import { Component, OnInit } from '@angular/core';

// services
import { PlotterService } from '../plotter.service';
import { GenerateIdService } from 'src/app/shared/services/generate-id.service';

// interfaces
import { Box } from '../interfaces/box.interface';

@Component({
  selector: 'gt-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  boxes: Array<any> = [];

  constructor(private plotterService: PlotterService, private generateIdService: GenerateIdService) {}

  ngOnInit() {
    this.loadGrid();
  }

  addBox(x: number, y: number) {
    this.boxes.push({
      x,
      y,
    });
  }

  loadGrid() {
    this.plotterService.loadGrid().subscribe((doc) => {
      if (doc.exists) {
        const boxes = doc.data().boxes;

        if (boxes) {
          boxes.forEach((box) => {
            this.addBox(box.x, box.y);
          });
        }
      } else {
        console.error('No document exists');
      }
    });
  }

  saveGrid() {
    this.plotterService.saveGrid(this.boxes);
  }

  updateBox(newPosition: any, previousPosition: any) {
    const box = {
      x: newPosition.x,
      y: newPosition.y,
    };

    const boxIndex = this.boxes.indexOf(previousPosition);

    if (boxIndex !== null) {
      this.boxes[boxIndex].x = box.x;
      this.boxes[boxIndex].y = box.y;
    } else {
      this.boxes.push(box);
    }
  }
}
