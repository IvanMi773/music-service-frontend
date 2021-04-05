import { Injectable } from '@angular/core';
import {
    CanActivate,
    CanDeactivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable({
    providedIn: 'root',
})
export class GateGuard implements CanActivate, CanDeactivate<unknown> {

    constructor (
        private tokenStorage: TokenStorageService,
        private router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree
    {
        if (!this.tokenStorage.getToken()) {
            return true;
        }

        this.router.navigateByUrl('/home')
        return false;
    }

    canDeactivate(
        component: unknown,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree
    {
        return confirm(
            'Are you shure you want to exit? Changes will not be saved'
        );
    }
}
