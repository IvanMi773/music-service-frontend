import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import config from '../configuration'

@Injectable({
  providedIn: 'root'
})
export class UserService {

	private _loggedIn: Boolean = false

	constructor(private http: HttpClient) {}

    login (username: String, password: String) {
        const body = {username: username, password: password};

		const headers = new HttpHeaders();
		headers.set('Content-Type', 'application/json; charset=utf-8');

        return this.http.post(config.hostName + 'api/auth/login', body, { headers: headers });
    }

	register (username: String, password: String, firstName: String, lastName: String, email: String) {
		const body = {
			username: username,
			email: email,
			password: password,
			firstName: firstName,
			lastName: lastName,
		};

		const headers = new HttpHeaders();
		headers.set('Content-Type', 'application/json; charset=utf-8');

        return this.http.post(config.hostName + 'api/auth/register', body, { headers: headers });
	}

	get loggedIn (): Boolean {
		return this.loggedIn
	}

	set loggedIn (loggedId: Boolean) {
		this.loggedIn = loggedId
	}
}
