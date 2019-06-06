import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

// services
import { PlotterService } from '../plotter.service';
import { MatDialog } from '@angular/material/dialog';
import { BoxFormComponent } from './box-form/box-form.component';

@Component({
  selector: 'gt-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
  @Input() position: any;
  @Input() index: number;
  @Output() updateBoxPositionEvent: any = new EventEmitter();

  currentPosition: any;
  initialPosition: any;
  transform: string;

  constructor(private plotterService: PlotterService, private dialog: MatDialog) {}

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
    this.currentPosition = { ...(<any>event.source._dragRef)._activeTransform };

    this.currentPosition.x = this.currentPosition.x + this.initialPosition.x;
    this.currentPosition.y = this.currentPosition.y + this.initialPosition.y;

    this.updateBoxPositionEvent.emit(this.currentPosition);
  }

  editBox() {
    const dialogRef = this.dialog.open(BoxFormComponent, {
      width: '960px',
    });

    dialogRef.componentInstance.saveEvent.subscribe((event) => {
      this.saveBoxDetails(event);
    });

    dialogRef.afterClosed().subscribe(() => {
      dialogRef.componentInstance.saveEvent.unsubscribe();
    });
  }

  async saveBoxDetails(event: any) {
    const box = {
      index: this.index,
      title: event.title,
      x: this.currentPosition.x,
      y: this.currentPosition.y,
    };

    this.plotterService.saveBoxDetails(box);
    this.dialog.closeAll();
  }
}
