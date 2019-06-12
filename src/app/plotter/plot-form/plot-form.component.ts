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
    title: ['', Validators.required],
    description: '',
    demensions: this.fb.group({
      width: [0, Validators.required],
      height: [0, Validators.required],
    }),
  });

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<PlotFormComponent>, @Inject(MAT_DIALOG_DATA) public data: Plot) {
    if (this.data) {
      this.form.get('title').patchValue(this.data.title ? this.data.title : '');
      this.form.get('description').patchValue(this.data.description ? this.data.description : '');
      this.form.get('demensions.width').patchValue(this.data.demensions.width ? this.data.demensions.width : 0);
      this.form.get('demensions.height').patchValue(this.data.demensions.height ? this.data.demensions.height : 0);
    }
  }

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
