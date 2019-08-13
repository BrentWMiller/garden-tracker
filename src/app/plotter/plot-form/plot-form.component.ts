import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Plot } from '../interfaces/plot.interface';

@Component({
  selector: 'gt-plot-form',
  templateUrl: './plot-form.component.html',
  styleUrls: ['./plot-form.component.scss'],
})
export class PlotFormComponent implements OnInit {
  @Output() saveEvent: any = new EventEmitter();

  form = this.fb.group({
    title: [this.data.title ? this.data.title : '', Validators.required],
    description: this.data.description ? this.data.description : '',
    demensions: this.fb.group({
      width: [this.data.demensions.width ? this.data.demensions.width : '', Validators.required],
      height: [this.data.demensions.height ? this.data.demensions.height : '', Validators.required],
    }),
  });

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<PlotFormComponent>, @Inject(MAT_DIALOG_DATA) public data: Plot) {}

  ngOnInit() {}

  get valid() {
    return this.form.valid;
  }

  get value() {
    return this.form.value;
  }

  save() {
    this.saveEvent.emit(this.value);
  }
}
