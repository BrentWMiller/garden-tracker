import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// modules
import { MaterialModule } from './material.module';

// services
import { AuthService } from './services/auth.service';

// components
import { NavigationComponent } from './components/navigation/navigation.component';

// 3rd party
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, RouterModule, MaterialModule, ColorPickerModule],
  providers: [AuthService],
  exports: [MaterialModule, NavigationComponent, ColorPickerModule],
})
export class SharedModule {}
