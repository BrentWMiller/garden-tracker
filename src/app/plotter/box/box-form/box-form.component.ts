import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'gt-box-form',
  templateUrl: './box-form.component.html',
  styleUrls: ['./box-form.component.scss'],
})
export class BoxFormComponent implements OnInit {
  @Output() saveEvent: any = new EventEmitter();

  form = this.fb.group({
    title: [''],
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
