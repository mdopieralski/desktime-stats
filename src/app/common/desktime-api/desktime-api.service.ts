import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DesktimeApiService {

  private apiUrl = 'https://desktime.com/api/v2/json/';

  constructor(private http: Http) {}

  getCompany(apiKey) {

    return this.http.get(`${this.apiUrl}company?apiKey=${apiKey}`)
      .map(this.extractCompany)
      .catch(this.handleError);
  }
  getEmployee(apiKey) {

    return this.http.get(`${this.apiUrl}employee?apiKey=${apiKey}`)
      .map(this.extractEmployee)
      .catch(this.handleError);
  }
  private extractCompany(res: Response) {

    const body = res.json();
    return body || {};
  }
  private extractEmployee(res: Response) {

    const body = res.json();
    const toArray = object => Object.keys(object).map(key => object[key]);

    body.apps = Object.keys(body.apps)
      .reduce(function(acc, key) {

        let newKey = '';

        switch (key) {
          case '0':

            newKey = 'neutral';
            break;

          case '1':

            newKey = 'productive';
            break;

          case '-1':

            newKey = 'unproductive';
            break;
        }

        acc[newKey] = toArray(body.apps[key]);

        return acc;
      }, {});

    return body || {};
  }
  private handleError(error: Response | any) {

    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    return Observable.throw(errMsg);
  }
}