import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [MatInputModule, MatFormFieldModule, MatToolbarModule, MatSelectModule, MatButtonModule, MatDialogModule],
  exports: [MatInputModule, MatFormFieldModule, MatToolbarModule, MatSelectModule, MatButtonModule, MatDialogModule],
})
export class MaterialModule {}
