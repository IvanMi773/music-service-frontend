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
        return this.http.post(config.hostName + 'api/playlist', formData)
    }

    public getPlaylistsByUsername (username: string) {
        return this.http.get(config.hostName + 'api/playlist/user/' + username)
    }

    public getPlaylistById (playlistId: number) {
        return this.http.get(config.hostName + 'api/playlist/' + playlistId)
    }
}
