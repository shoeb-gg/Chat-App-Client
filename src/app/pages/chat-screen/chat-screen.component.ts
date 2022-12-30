import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { TextService } from '../../services/text.service';
import { AuthService } from '../../auth/auth.service';
import { ErrorSnackbarComponent } from '../../shared/error-snackbar/error-snackbar.component';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.scss'],
})
export class ChatScreenComponent implements OnInit {
  constructor(
    private textService: TextService,
    private router: Router,
    private auth: AuthService
  ) {}

  public msgContent: string = '';

  ngOnInit(): void {
    // this.socket.on('connect', () => {
    //   console.log(this.socket.id); // x8WIv7-mJelg7on_ALbx
    // });
  }

  getSampleText() {
    this.textService.getSampleText().subscribe((res) => {
      console.log(res);
    });
  }
}
