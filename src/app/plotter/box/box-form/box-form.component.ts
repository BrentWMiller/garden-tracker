import { Component, OnInit, Output, EventEmitter, Input, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Box } from '../../interfaces/box.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'gt-box-form',
  templateUrl: './box-form.component.html',
  styleUrls: ['./box-form.component.scss'],
})
export class BoxFormComponent implements OnInit {
  @Output() saveEvent: any = new EventEmitter();

  form = this.fb.group({
    title: [this.data.title ? this.data.title : ''],
  });

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<BoxFormComponent>, @Inject(MAT_DIALOG_DATA) public data: Box) {}

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
