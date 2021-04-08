import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from '../configuration'

@Injectable({
    providedIn: 'root',
})
export class SongService {

    constructor(
        private http: HttpClient
    ) {}

    public upload (formData: FormData) {
        return this.http.post(config.hostName + 'api/song', formData)
    }

    public getAllSongs () {
        return this.http.get(config.hostName + "api/song")
    }

    public getSongsByUsername (username: string) {
        return this.http.get(config.hostName + 'api/song/user/' + username)
    }

    public updateLikes (songId: number, username: string) {
        return this.http.put(config.hostName + 'api/song/updateLikes/' + songId, username)
    }

    public getLikes (songId: number, username: string) {
        return this.http.get(config.hostName + 'api/song/likes/' + songId + '/' + username)
    }

    public getSubscriptionsSongs () {
        return this.http.get(config.hostName + 'api/song/s')
    }

    public saveSongToPlaylist (songId: number, playlistId: number) {
        return this.http.post(config.hostName + 'api/song/' + songId + '/p/' + playlistId, '')
    }

    public deleteSong (songId: number) {
        return this.http.delete(config.hostName + 'api/song/' + songId)
    }
}

//TODO: form for upload songs [ drag & drop ]
//TODO: create button component
//TODO: loader for uploading songs
//TODO:
