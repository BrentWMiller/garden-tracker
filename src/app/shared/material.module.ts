import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [MatInputModule, MatFormFieldModule, MatToolbarModule, MatSelectModule, MatButtonModule, MatDialogModule, MatListModule, MatIconModule],
  exports: [MatInputModule, MatFormFieldModule, MatToolbarModule, MatSelectModule, MatButtonModule, MatDialogModule, MatListModule, MatIconModule],
})
export class MaterialModule {}
