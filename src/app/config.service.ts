/**
 * Created by libin on 01/07/18.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  constructor(private http: HttpClient) {
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/config.json');
  }
}
