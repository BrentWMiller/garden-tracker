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

  currentPosition: any;
  initialPosition: any;
  transform: string;

  constructor(private plotterService: PlotterService) {}

  ngOnInit() {
    this.transform = `translate3d(${this.position.x}px, ${this.position.y}px, 0)`;

    this.initialPosition = {
      x: this.position.x,
      y: this.position.y,
    };

    this.currentPosition = {
      x: this.position.x ? this.position.x : 0,
      y: this.position.y ? this.position.y : 0,
    };
  }

  dragEnd(event: CdkDragEnd) {
    console.log(this.initialPosition);
    this.currentPosition = { ...(<any>event.source._dragRef)._activeTransform };

    this.currentPosition.x = this.currentPosition.x + this.initialPosition.x;
    this.currentPosition.y = this.currentPosition.y + this.initialPosition.y;

    this.updateBoxPositionEvent.emit(this.currentPosition);
  }
}
