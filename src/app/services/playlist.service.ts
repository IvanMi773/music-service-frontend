import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from '../configuration'

@Injectable({
    providedIn: 'root',
})
export class PlaylistService {
    constructor(
        private http: HttpClient
    ) {}

    public createPlaylist (formData: FormData) {
        console.log(config.hostName + 'api/playlist')
        return this.http.post(config.hostName + 'api/playlist', formData)
    }
}
