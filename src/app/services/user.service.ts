import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    public login(username: String, password: String) {
        const body = {username: username, password: password};

        return this.http.post(environment.apiUrl + 'api/auth/login', body);
    }

    public register(username: String, password: String, firstName: String, lastName: String, email: String, role: number) {
        const body = {
            username: username,
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            role: role
        };

        return this.http.post(environment.apiUrl + 'api/auth/register', body);
    }

    public getAllUsers() {
        return this.http.get(environment.apiUrl + 'api/user/all');
    }

    public getProfileByUsername(username: string) {
        return this.http.get(environment.apiUrl + 'api/user/' + username);
    }

    public subscribe(channelId: string) {
        return this.http.post(environment.apiUrl + 'api/user/change-subscription/' + channelId, '');
    }

    public updateUser(body: FormData) {
        return this.http.put(environment.apiUrl + 'api/user/update', body);
    }

    public delete(username: string) {
        return this.http.delete(environment.apiUrl + 'api/user/' + username);
    }
}
