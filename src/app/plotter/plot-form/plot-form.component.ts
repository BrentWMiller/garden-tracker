import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// interfaces
import { Plot } from '../interfaces/plot.interface';

interface PlotFormData {
  plot: Plot;
  type: string;
}

@Component({
  selector: 'gt-plot-form',
  templateUrl: './plot-form.component.html',
  styleUrls: ['./plot-form.component.scss'],
})
export class PlotFormComponent implements OnInit {
  @Output() saveEvent: any = new EventEmitter();

  form = this.fb.group({
    title: [this.data.plot.title ? this.data.plot.title : '', Validators.required],
    description: this.data.plot.description ? this.data.plot.description : '',
    demensions: this.fb.group({
      width: [this.data.plot.demensions.width ? this.data.plot.demensions.width : '', Validators.required],
      height: [this.data.plot.demensions.height ? this.data.plot.demensions.height : '', Validators.required],
    }),
  });

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<PlotFormComponent>, @Inject(MAT_DIALOG_DATA) public data: PlotFormData) {}

  ngOnInit() {}

  get valid() {
    return this.form.valid;
  }

  get value() {
    return this.form.value;
  }

  save() {
    this.saveEvent.emit({
      plot: this.value,
      type: this.data.type,
    });
  }
}
