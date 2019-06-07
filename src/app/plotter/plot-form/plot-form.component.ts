import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

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
