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
}
