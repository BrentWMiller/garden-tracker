import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'gt-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  @Input() error: string;
  @Output() loginEvent: any = new EventEmitter();

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

  public login() {
    this.loginEvent.emit(this.value);
  }

}
