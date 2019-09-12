import { Component, OnInit, Output, EventEmitter, ViewChild, NgZone, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

// 3rd party
import { take } from 'rxjs/operators';

// interfaces
import { Seed } from '../interfaces/seed.interface';

interface SeedFormData {
  seed: Seed;
  type: string;
}

@Component({
  selector: 'gt-seed-form',
  templateUrl: './seed-form.component.html',
  styleUrls: ['./seed-form.component.scss'],
})
export class SeedFormComponent implements OnInit {
  @Output() saveEvent: any = new EventEmitter();
  @ViewChild('autosize', { static: false }) autosize: CdkTextareaAutosize;

  form = this.fb.group({
    name: [this.data.seed ? this.data.seed.name : '', Validators.required],
    description: this.data.seed ? this.data.seed.description : '',
  });

  constructor(private fb: FormBuilder, private ngZone: NgZone, @Inject(MAT_DIALOG_DATA) public data: SeedFormData) {}

  ngOnInit() {}

  get valid() {
    return this.form.valid;
  }

  get value() {
    return this.form.value;
  }

  save() {
    this.saveEvent.emit({
      seed: this.value,
      type: this.data.type,
    });
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }
}
