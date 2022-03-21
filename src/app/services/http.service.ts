import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestMethod } from '../shared/constants/http.constants';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public makeHttpGetRequest(url: string, data?: any, httpOptions?: any): Observable<any> {
    return this.makeHttpRequest(url, RequestMethod.GET, httpOptions);
  }

  public makeHttpPostRequest(url: string, data: any, httpOptions?: any): Observable<any> {
    return this.makeHttpRequest(url, RequestMethod.POST, data, httpOptions);
  }

  makeHttpRequest(url, requestMethod, data?, httpOptions?): Observable<any> {

    const options = {};
    if (data) {
      // console.log('http service data = ', data);
      const headers = new HttpHeaders()
        .set('content-type', 'application/json');
      options['body'] = data;
      options['headers'] = headers;
    }
    // console.log('options = ', options);
    return this.http.request(requestMethod, url, options);
  }
}
