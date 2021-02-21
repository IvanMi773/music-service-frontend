import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private tokenStorage: TokenStorageService) {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {

        const token = this.tokenStorage.getToken()

        if (!token) {
            return next.handle(request);
        }

        const request1 = request.clone({
            headers: request.headers.set('Authorization', 'Bearer ' + token)
        })

        return next.handle(request1);
    }
}
