import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class SongService {

    constructor(
        private http: HttpClient
    ) {}

    public upload (formData: FormData) {
        return this.http.post(environment.apiUrl + 'api/song', formData)
    }

    public getAllSongs () {
        return this.http.get(environment.apiUrl + "api/song")
    }

    public getSongsByUsername (username: string) {
        return this.http.get(environment.apiUrl + 'api/song/user/' + username)
    }

    public updateLikes (songId: number, username: string) {
        return this.http.put(environment.apiUrl + 'api/song/updateLikes/' + songId, username)
    }

    public getLikes (songId: number, username: string) {
        return this.http.get(environment.apiUrl + 'api/song/likes/' + songId + '/' + username)
    }

    public getSubscriptionsSongs () {
        return this.http.get(environment.apiUrl + 'api/song/s')
    }

    public saveSongToPlaylist (songId: number, playlistId: number) {
        return this.http.post(environment.apiUrl + 'api/song/' + songId + '/p/' + playlistId, '')
    }

    public deleteSong (songId: number) {
        return this.http.delete(environment.apiUrl + 'api/song/' + songId)
    }
}

//TODO: form for upload songs [ drag & drop ]
//TODO: loader for uploading songs
