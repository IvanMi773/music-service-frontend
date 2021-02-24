import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from '../configuration'

@Injectable({
    providedIn: 'root',
})
export class SongUploadService {

    constructor(
        private http: HttpClient
    ) {}

    public upload (formData: FormData) {
        return this.http.post(config.hostName + 'api/song', formData)
    }

    public getAllGenres () {
        return this.http.get(config.hostName + "api/genre")
    }

    public createGenre (genreName: string) {
        const body = {
            name: genreName
        }

        const headers = new HttpHeaders({'Content-Type': 'application/json'})

        return this.http.post(config.hostName + "api/genre", body, { headers: headers }).toPromise()
    }
}

//TODO: display authorization errors
//TODO: wrong file validation errors
//TODO: form for upload songs [ drag & drop ]
//TODO: multiple files upload functional
//TODO: create button component
//TODO: loader for uploading songs
//TODO:
