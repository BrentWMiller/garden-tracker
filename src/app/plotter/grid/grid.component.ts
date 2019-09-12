import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// services
import { PlotterService } from '../plotter.service';

// interfaces
import { Box } from '../interfaces/box.interface';
import { PlotDemensions } from '../interfaces/plot.interface';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'gt-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  pid: string;
  title: string;
  description: string;
  demensions: PlotDemensions;
  boxes: Array<Box> = [];

  constructor(private db: AngularFirestore, private plotterService: PlotterService, private route: ActivatedRoute) {
    this.pid = this.route.snapshot.params.pid;

    this.demensions = {
      width: 0,
      height: 0,
    };
  }

  async ngOnInit() {
    await this.loadGrid();
  }

  addNewBox() {
    this.addBox(this.db.createId(), '', 0, 0, '#ffffff');
  }

  addBox(id: string, title: string, x: number, y: number, color: string) {
    this.boxes.push({
      id: id,
      title: title ? title : '',
      x,
      y,
      color: color ? color : '',
    });
  }

  async loadGrid() {
    this.plotterService.loadGrid(this.pid).subscribe((doc) => {
      if (doc.exists) {
        const data = doc.data();
        const boxes = data.boxes;

        this.title = data.title ? data.title : '';
        this.description = data.description ? data.description : '';

        this.demensions.width = data.demensions.width * 50;
        this.demensions.height = data.demensions.height * 50;

        if (boxes) {
          boxes.forEach((box: Box) => {
            const id = box.id ? box.id : this.db.createId();
            this.addBox(id, box.title, box.x, box.y, box.color);
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

  updateBox(box: Box, previousPosition: any) {
    const updatedBox = {
      id: box.id,
      title: box.title,
      x: box.x,
      y: box.y,
      color: box.color,
    };

    const boxIndex = this.boxes.indexOf(previousPosition);

    if (boxIndex !== null) {
      this.boxes[boxIndex].x = box.x;
      this.boxes[boxIndex].y = box.y;

      this.boxes[boxIndex].title = box.title ? box.title : '';
      this.boxes[boxIndex].color = box.color ? box.color : '';
    } else {
      this.boxes.push(updatedBox);
    }
  }

  removeBox(id: string) {
    const indexToRemove = this.boxes.findIndex((box) => box.id === id);
    this.boxes.splice(indexToRemove, 1);
  }
}
