import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root',
})
export class TokenStorageService {
	private TOKEN_KEY = 'login_token';
    constructor() {}

    public getToken(): string {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    signOut(): void {
        localStorage.removeItem(this.TOKEN_KEY);
    }

	get tokenKey () {
		return this.TOKEN_KEY
	}
}
