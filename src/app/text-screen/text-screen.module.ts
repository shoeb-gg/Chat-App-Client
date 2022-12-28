import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextScreenRoutingModule } from './text-screen-routing.module';
import { TextScreenComponent } from './text-screen.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TextScreenComponent],
  imports: [
    CommonModule,
    TextScreenRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
})
export class TextScreenModule {}
