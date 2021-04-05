import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Token } from '../models/Token';

@Injectable({
	providedIn: 'root',
})
export class TokenStorageService {
	private TOKEN_KEY = 'login_token'
    private USERNAME_KEY = 'username'

    constructor() {}

    public register (name: string, value: string) {
        localStorage.setItem(name, value)
    }

    public getToken(): string {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    public getUsername(): string {
        const tokenPayload: Token = jwt_decode(this.getToken())
        return tokenPayload.sub
    }

    public getRole(): string {
        const tokenPayload: Token = jwt_decode(this.getToken())
        return tokenPayload.authorities
    }

    signOut(): void {
        localStorage.clear()
    }

	get tokenKey () {
		return this.TOKEN_KEY
	}

    get usernameKey () {
        return this.USERNAME_KEY
    }
}
