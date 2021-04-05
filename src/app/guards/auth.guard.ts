import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
} from '@angular/router';
import jwt_decode from 'jwt-decode';
import { Token } from '../models/Token';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {

    constructor (
        private router: Router,
        private tokenStorage: TokenStorageService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        const tokenPayload: Token = jwt_decode(this.tokenStorage.getToken())

        if (route.data.roles.indexOf(tokenPayload.authorities) !== -1) {
            return true
        }

        //TODO: when redirecting, home page not updated
        this.router.navigateByUrl('/home')
        return false
    }
}
