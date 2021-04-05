import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from '../configuration'

@Injectable({
  providedIn: 'root'
})
export class UserService {

	constructor(private http: HttpClient) {}

    public login (username: String, password: String) {
        const body = {username: username, password: password};

        return this.http.post(config.hostName + 'api/auth/login', body);
    }

	public register (username: String, password: String, firstName: String, lastName: String, email: String, role: number) {
		const body = {
			username: username,
			email: email,
			password: password,
			firstName: firstName,
			lastName: lastName,
            role: role
		};

        return this.http.post(config.hostName + 'api/auth/register', body);
	}

    public getProfileByUsername (username: string) {
        return this.http.get(config.hostName + 'api/user/' + username)
    }

    public subscribe (channelId: string) {
        return this.http.post(config.hostName + 'api/user/change-subscription/' + channelId, '')
    }

    public updateUser (body: FormData) {
        return this.http.put(config.hostName + 'api/user/update', body)
    }

    public delete (username: string) {
        return this.http.delete(config.hostName + 'api/user/' + username)
    }

	get loggedIn (): Boolean {
		return this.loggedIn
	}

	set loggedIn (loggedId: Boolean) {
		this.loggedIn = loggedId
	}
}
