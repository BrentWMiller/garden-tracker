import { Component, OnInit } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'gt-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  currentPosition?: {x: number, y: number};

  constructor() {
    this.currentPosition = {
      x: 0,
      y: 0,
    }
  }

  ngOnInit() {
  }

  dragEnd(event: CdkDragEnd) {
    this.currentPosition = { ...(<any>event.source._dragRef)._passiveTransform };
  }

}
