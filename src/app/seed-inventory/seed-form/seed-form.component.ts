import { Component, OnInit, Output, EventEmitter, ViewChild, NgZone, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

// 3rd party
import { take } from 'rxjs/operators';

// interfaces
import { Seed } from '../interfaces/seed.interface';

@Component({
  selector: 'gt-seed-form',
  templateUrl: './seed-form.component.html',
  styleUrls: ['./seed-form.component.scss'],
})
export class SeedFormComponent implements OnInit {
  @Output() saveEvent: any = new EventEmitter();

  form = this.fb.group({
    name: [this.data.name ? this.data.name : '', Validators.required],
    description: this.data.description ? this.data.description : '',
  });

  constructor(private fb: FormBuilder, private ngZone: NgZone, @Inject(MAT_DIALOG_DATA) public data: Seed) {}

  @ViewChild('autosize', { static: false }) autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
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
