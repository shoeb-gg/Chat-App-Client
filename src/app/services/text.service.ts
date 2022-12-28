import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TextService {
  constructor(private http: HttpClient) {}

  textEndpoint = environment.backendUrl + '/text/';

  getSampleText() {
    return this.http.get(this.textEndpoint);
  }
}
