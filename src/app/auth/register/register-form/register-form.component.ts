import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'gt-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  @Input() error: string;
  @Output() registerEvent: any = new EventEmitter();

  public form = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  get valid() {
    return this.form.valid;
  }

  get value() {
    return this.form.value;
  }

  public register() {
    this.registerEvent.emit(this.value);
  }

}
