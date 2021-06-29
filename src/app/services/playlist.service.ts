import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class PlaylistService {

    constructor(
        private http: HttpClient
    ) {}

    public createPlaylist (formData: FormData) {
        return this.http.post(environment.apiUrl + 'api/playlist', formData)
    }

    public getPlaylistsByUsername (username: string) {
        return this.http.get(environment.apiUrl + 'api/playlist/user/' + username)
    }

    public getPlaylistById (playlistId: number) {
        return this.http.get(environment.apiUrl + 'api/playlist/' + playlistId)
    }

    public getAllPlaylists () {
        return this.http.get(environment.apiUrl + 'api/playlist')
    }

    public deleteById (id: number) {
        return this.http.delete(environment.apiUrl + 'api/playlist/' + id)
    }
}
