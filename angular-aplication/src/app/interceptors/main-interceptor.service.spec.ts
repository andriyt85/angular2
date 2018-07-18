/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MainInterceptorService } from './main-interceptor.service';

describe('Service: MainInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainInterceptorService]
    });
  });

  it('should ...', inject([MainInterceptorService], (service: MainInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
