import { HttpClientModule } from '@angular/common/http';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { RequestMethod } from '../shared/constants/http.constants';

fdescribe('HttpService', () => {
  let service: HttpService;
  let http: HttpClient;
  const getApiUrl = '/get/api/url';
  const postApiUrl = '/post/api/url';
  const makeHttpRequestUrl = '/make/http/request';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(HttpService);
    http = new HttpClient(null);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make get http call', () => {
    spyOn(service, 'makeHttpRequest');
    service.makeHttpGetRequest(getApiUrl);
    expect(service.makeHttpRequest).toHaveBeenCalled();
  });

  it('should make post http call', () => {
    spyOn(service, 'makeHttpRequest');
    service.makeHttpPostRequest(postApiUrl, {});
    expect(service.makeHttpRequest).toHaveBeenCalled();
  });

  it('should make http request call', () => {
    const data = { demo: 'demo' };
    service.makeHttpRequest(makeHttpRequestUrl, RequestMethod.GET, data);
  });
});
