import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) { }

  isRefreshingToken: boolean = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | any> {
    // const headersInfo = {
    //   'Content-Type': 'application/json',
    //   'Authorization': token
    // }
    // if(!headersInfo.Authorization) delete headersInfo.Authorization;
    // const headers = new Headers(headersInfo);

    const token = this.authService.getToken();
    console.log(token)
    return next.handle(request.clone({
      headers: request.headers.set("Authorization", `${token}`)
    }))
      .pipe(
        catchError(err => {
          if (err instanceof HttpErrorResponse) {
            switch ((<HttpErrorResponse>err).status) {
              case 401:
                this.authService.logout();
                this.router.navigate(['/']);
              default:
                return throwError(err);
            }
          } else {
            return throwError(err);
          }
        }));
  }
}
