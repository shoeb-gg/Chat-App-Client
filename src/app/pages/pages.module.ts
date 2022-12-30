import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { OnlineUsersComponent } from './online-users/online-users.component';

@NgModule({
  declarations: [ChatScreenComponent, OnlineUsersComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
})
export class PagesModule {}
