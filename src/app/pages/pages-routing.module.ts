import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OnlineUsersComponent } from './online-users/online-users.component';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'online-users', component: OnlineUsersComponent },
  { path: 'user', component: ChatScreenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
