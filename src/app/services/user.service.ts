import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import config from '../configuration'

@Injectable({
  providedIn: 'root'
})
export class UserService {

	constructor(private http: HttpClient) {}

    login (username: String, password: String) {
        const body = {username: username, password: password};

        return this.http.post(config.hostName + 'api/auth/login', body);
    }

	register (username: String, password: String, firstName: String, lastName: String, email: String) {
		const body = {
			username: username,
			email: email,
			password: password,
			firstName: firstName,
			lastName: lastName,
		};

        return this.http.post(config.hostName + 'api/auth/register', body);
	}

	get loggedIn (): Boolean {
		return this.loggedIn
	}

	set loggedIn (loggedId: Boolean) {
		this.loggedIn = loggedId
	}
}
