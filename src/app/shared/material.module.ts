import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [MatInputModule, MatFormFieldModule, MatToolbarModule, MatSelectModule, MatButtonModule],
  exports: [MatInputModule, MatFormFieldModule, MatToolbarModule, MatSelectModule, MatButtonModule],
})
export class MaterialModule {}
