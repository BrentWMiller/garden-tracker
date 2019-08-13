import { Component, OnInit, Output, EventEmitter, ViewChild, NgZone } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

@Component({
  selector: 'gt-seed-form',
  templateUrl: './seed-form.component.html',
  styleUrls: ['./seed-form.component.scss'],
})
export class SeedFormComponent implements OnInit {
  @Output() saveEvent: any = new EventEmitter();

  form = this.fb.group({
    name: ['', Validators.required],
    description: '',
  });

  constructor(private fb: FormBuilder, private ngZone: NgZone) {}

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
