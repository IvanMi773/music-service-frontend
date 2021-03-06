import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from '../configuration'

@Injectable({
    providedIn: 'root',
})
export class GenreService {
    constructor(private http: HttpClient) {}

    public getAllGenres() {
        return this.http.get(config.hostName + 'api/genre');
    }

    public createGenre(genreName: string) {
        const body = {
            name: genreName,
        };

        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this.http
            .post(config.hostName + 'api/genre', body, { headers: headers })
            .toPromise();
    }
}
