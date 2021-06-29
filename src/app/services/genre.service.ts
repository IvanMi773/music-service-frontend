import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class GenreService {
    constructor(private http: HttpClient) {}

    public getAllGenres() {
        return this.http.get(environment.apiUrl + 'api/genre');
    }

    public createGenre(genreName: string) {
        const body = {
            name: genreName,
        };

        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this.http
            .post(environment.apiUrl + 'api/genre', body, { headers: headers })
            .toPromise();
    }
}
