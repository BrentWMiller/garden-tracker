import { Component, OnInit } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'gt-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  boxes: Array<any> = [];

  constructor() {}

  ngOnInit() {}

  addBox() {
    this.boxes.push(CdkDrag);
  }
}
