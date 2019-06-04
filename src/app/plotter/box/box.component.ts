import { Component, Output, EventEmitter } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

// services
import { PlotterService } from '../plotter.service';

@Component({
  selector: 'gt-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent {
  @Output() updateBoxPositionEvent: any = new EventEmitter();

  currentPosition?: { x: number; y: number };

  constructor(private plotterService: PlotterService) {
    this.currentPosition = {
      x: 0,
      y: 0,
    };
  }

  dragEnd(event: CdkDragEnd) {
    this.currentPosition = { ...(<any>event.source._dragRef)._passiveTransform };
    this.updateBoxPositionEvent.emit(this.currentPosition);
  }
}
