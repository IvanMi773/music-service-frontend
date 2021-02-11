import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class HttpClientService {

    constructor(private http: HttpClient) {}

    loginRequest(username: String, password: String) {
        const body = {username: username, password: password};

		const headers = new HttpHeaders();
		headers.set('Content-Type', 'application/json; charset=utf-8');

        return this.http.post('http://localhost:8080/api/auth/login', body, { headers: headers });
    }
}

