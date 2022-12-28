import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorSnackbarComponent } from './error-snackbar/error-snackbar.component';

@NgModule({
  declarations: [NavbarComponent, ErrorSnackbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
