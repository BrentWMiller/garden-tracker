import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

// services
import { PlotterService } from '../plotter.service';

@Component({
  selector: 'gt-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
  @Input() position: any;
  @Output() updateBoxPositionEvent: any = new EventEmitter();

  initialPosition: string;
  currentPosition?: { x: number; y: number };

  constructor(private plotterService: PlotterService) {}

  ngOnInit() {
    this.currentPosition = {
      x: this.position.x ? this.position.x : 0,
      y: this.position.y ? this.position.y : 0,
    };

    this.initialPosition = `translate3d(${this.position.x}px, ${this.position.y}px, 0)`;
  }

  dragEnd(event: CdkDragEnd) {
    this.currentPosition = { ...(<any>event.source._dragRef)._passiveTransform };
    this.updateBoxPositionEvent.emit(this.currentPosition);
  }
}
