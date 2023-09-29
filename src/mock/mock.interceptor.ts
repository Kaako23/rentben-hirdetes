import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, delay, dematerialize, materialize, mergeMap, of } from "rxjs";
import { Mock } from "./mock";
import { StatusCodes } from 'http-status-codes';

@Injectable()
export class MockHttpCallInterceptor implements HttpInterceptor {

    private mock: Mock;
    constructor() {
      this.mock = new Mock();
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return of(null)
      .pipe(
        mergeMap(() => {
          if (request.url.includes('/getUserList')) {
            return of(
              new HttpResponse({
                url: '',
                status: StatusCodes.OK,
                body: this.mock.getUserList()
              }),
            );
          } else if (request.url.includes('/getAdvertisementList')) {
            return of(
              new HttpResponse({
                url: '',
                status: StatusCodes.OK,
                body: this.mock.getAdvertisementList()
              }),
            );
          }
          return next.handle(request);
        }),
      );
    }

}
