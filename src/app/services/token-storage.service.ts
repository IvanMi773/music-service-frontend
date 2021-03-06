import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root',
})
export class TokenStorageService {
	private TOKEN_KEY = 'login_token'
    private USERNAME_KEY = 'username'
    constructor() {}

    public getToken(): string {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    public getUsername(): string {
        return localStorage.getItem(this.USERNAME_KEY)
    }

    signOut(): void {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.USERNAME_KEY)
    }

	get tokenKey () {
		return this.TOKEN_KEY
	}

    get usernameKey () {
        return this.USERNAME_KEY
    }
}
