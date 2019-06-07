import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  pid: string;
  title: string;
  boxes: Array<Box> = [];

  constructor(private plotterService: PlotterService, private route: ActivatedRoute) {
    this.pid = this.route.snapshot.params.pid;
  }

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
    this.plotterService.loadGrid(this.pid).subscribe((doc) => {
      if (doc.exists) {
        const data = doc.data();
        const boxes = data.boxes;
        this.title = data.title;

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
    this.plotterService.saveGrid(this.boxes, this.pid);
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
