import { Component, OnInit, Inject } from '@angular/core';

import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-error-snackbar',
  templateUrl: './error-snackbar.component.html',
  styleUrls: ['./error-snackbar.component.scss'],
})
export class ErrorSnackbarComponent implements OnInit {
  public status: number | string = 0;
  public msg: string = 'Unknown Error !';

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}

  ngOnInit(): void {
    this.status = this.data.status;
    this.msg = this.data.error;
  }
}
