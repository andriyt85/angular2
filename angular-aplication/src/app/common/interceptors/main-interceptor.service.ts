import { environment } from '../../enviroments/environment';
import { Observable } from 'rxjs/observable';
import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';


@Injectable()
export class MainInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedReq = req.clone({
      url: `${environment.apiUrl}/${req.url}`,
      setHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    return next.handle(clonedReq);
  }
}
